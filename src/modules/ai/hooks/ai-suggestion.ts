import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { generateJsonBody, suggestRequestName } from "../services";
import { JsonBodyGenerationParams, RequestSuggestionParams } from "../types";

export function useSuggestRequestName() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: RequestSuggestionParams)=>suggestRequestName(params),
    onSuccess: (_response, variables) => {
      queryClient.setQueryData(["request-suggestions", variables], _response, {
        updatedAt: Date.now(),
      });

      // Invalidate the query cache after generating suggestions
      toast.success(`Generated name suggestions successfully`);
    },
  });
}


export function useGenerateJsonBody(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (params: JsonBodyGenerationParams) => generateJsonBody(params),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["json-body"] });
            toast.success("JSON body generated successfully");
        },
        onError: () => {
            toast.error("Failed to generate JSON body");
        }
    })
}