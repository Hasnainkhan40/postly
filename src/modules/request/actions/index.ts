"use server";

import db from "@/lib/db";
import { REST_METHOD } from "@prisma/client";
import axios, { AxiosRequestConfig } from "axios";


export type Request= {
  name: string;
  method: REST_METHOD;
  url: string;
  body?: string;
  headers?: string;
  parameters?: string;
};


export const addRequestToCollection = async (collectionId:string , value:Request)=>{
  const request = await db.request.create({
    data:{
        collectionId,
        name: value.name,
        method: value.method,
        url: value.url,
        body: value.body,
        headers: value.headers,
        parameters: value.parameters,
    }
  });

  return request;
}



export const saveRequest = async (id:string, value:Request)=>{

  console.log(value , id);
const request =  await db.request.update({
    where: {
      id: id
    },
    data: {
      name: value.name,
      method: value.method,
      url: value.url,
      body: value.body,
      headers: value.headers,
      parameters: value.parameters,
    },
  });

  return request;
}


export const getAllRequestFromCollection = async (collectionId:string)=>{
  const requests = await db.request.findMany({
    where: {
      collectionId,
    },
  });
  return requests;
}



export async function sendRequest(req: {
  method: string;
  url: string;
  headers?: Record<string, string>;
  params?: Record<string, string>;
  body?: unknown;
}) {
  const config: AxiosRequestConfig = {
    method: req.method,
    url: req.url,
    headers: req.headers,
    params: req.params,
    data: req.body,
    validateStatus: () => true, // ✅ capture errors too
  };

  const start = performance.now();
  try {
    const res = await axios(config);
    const end = performance.now();

    const duration = end - start;
    const size =
      res.headers["content-length"] ||
      new TextEncoder().encode(JSON.stringify(res.data)).length;

    console.log(res.data);
    
    return {
      status: res.status,        
      statusText: res.statusText, 
        headers: Object.fromEntries(Object.entries(res.headers)),      
      data: res.data,            
      duration: Math.round(duration),
      size,
    };
  } catch (err) {
    const end = performance.now();
    return {
      error: err instanceof Error ? err.message : 'Unknown error',
      duration: Math.round(end - start),
    };
  }
}


export async function run(requestId: string) {
  try {
    const request = await db.request.findUnique({
      where: { id: requestId }
    });

    if (!request) {
      throw new Error(`Request with id ${requestId} not found`);
    }

   
    // Normalize headers and parameters to the expected shapes for sendRequest
    let headers: Record<string, string> | undefined = undefined;
    if (request.headers) {
      try {
        const parsed = typeof request.headers === 'string' ? JSON.parse(request.headers) : request.headers;
        if (parsed && typeof parsed === 'object') {
          headers = Object.fromEntries(Object.entries(parsed).map(([k, v]) => [k, String(v)]));
        }
      } catch {
        headers = undefined;
      }
    }

    let params: Record<string, string> | undefined = undefined;
    if (request.parameters) {
      try {
        const parsed = typeof request.parameters === 'string' ? JSON.parse(request.parameters) : request.parameters;
        if (parsed && typeof parsed === 'object') {
          params = Object.fromEntries(Object.entries(parsed).map(([k, v]) => [k, String(v)]));
        }
      } catch {
        params = undefined;
      }
    }

    const requestConfig = {
      method: request.method,
      url: request.url,
      headers: headers || undefined,
      params: params || undefined,
      body: request.body || undefined
    };

    const result = await sendRequest(requestConfig);

   
    const requestRun = await db.requestRun.create({
      data: {
        requestId: request.id,
        status: result.status || 0,
        statusText: result.statusText || (result.error ? 'Error' : null),
        headers: result.headers || "",
        body: result.data ? (typeof result.data === 'string' ? result.data : JSON.stringify(result.data)) : null,
        durationMs: result.duration || 0
      }
    });

  
    if (result.data && !result.error) {
      await db.request.update({
        where: { id: request.id },
        data: {
          response: result.data,
          updatedAt: new Date()
        }
      });
    }

    return {
      success: true,
      requestRun,
      result
    };

  } catch (err) {
    try {
      const failedRun = await db.requestRun.create({
        data: {
          requestId,
          status: 0,
          statusText: 'Failed',
          headers: "",
          body: err instanceof Error ? err.message : 'Unknown error',
          durationMs: 0
        }
      });

      return {
        success: false,
        error: err instanceof Error ? err.message : 'Unknown error',
        requestRun: failedRun
      };
    } catch (dbError) {
      return {
        success: false,
        error: `Request failed: ${err instanceof Error ? err.message : 'Unknown error'}. DB save failed: ${(dbError as Error).message}`
      };
    }
  }
}


export async function runDirect(requestData: {
  id: string;
  method: string;
  url: string;
  headers?: Record<string, string>;
  parameters?: Record<string, unknown>;
  body?: unknown;
}) {
  try {
    const params = requestData.parameters
      ? Object.fromEntries(Object.entries(requestData.parameters).map(([k, v]) => [k, String(v)]))
      : undefined;

    const requestConfig = {
      method: requestData.method,
      url: requestData.url,
      headers: requestData.headers,
      params,
      body: requestData.body
    };

    const result = await sendRequest(requestConfig);

    const requestRun = await db.requestRun.create({
      data: {
        requestId: requestData.id,
        status: result.status || 0,
        statusText: result.statusText || (result.error ? 'Error' : null),
        headers: result.headers || "",
        body: result.data ? (typeof result.data === 'string' ? result.data : JSON.stringify(result.data)) : null,
        durationMs: result.duration || 0
      }
    });

    // Update request with latest response if successful
    if (result.data && !result.error) {
      await db.request.update({
        where: { id: requestData.id },
        data: {
          response: result.data,
          updatedAt: new Date()
        }
      });
    }

    return {
      success: true,
      requestRun,
      result
    };

  } catch (err) {
    const failedRun = await db.requestRun.create({
      data: {
        requestId: requestData.id,
        status: 0,
        statusText: 'Failed',
        headers: "",
        body: err instanceof Error ? err.message : 'Unknown error',
        durationMs: 0
      }
    });

    return {
      success: false,
      error: err instanceof Error ? err.message : 'Unknown error',
      requestRun: failedRun
    };
  }
}