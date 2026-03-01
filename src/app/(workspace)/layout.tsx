import React from 'react'
import TabbedLeftPanel from '@/modules/workspace/components/tabbed-left-panel'
import { initializeWorkspace } from '@/modules/workspace/actions';
import { currentUser } from '@/modules/authentication/actions';
import Header from '@/modules/layout/components/header';

const Rootlayout = async ({ children }: { children: React.ReactNode }) => {
  
  const workspace = await initializeWorkspace();
  const user = await currentUser();

  console.log("Workspace initialized:", JSON.stringify(workspace, null, 2));
  
  return (
    <>
     {/* @ts-expect-error user type mismatch */}
      <Header user={user}/>
      <main className='max-h-[calc(100vh-4rem)] h-[calc(100vh-4rem)] flex flex-1 overflow-hidden'>
        <div className='flex h-full w-full'>
            <div className='w-12 border-zinc-800 bg-zinc-900'>
                 <TabbedLeftPanel />
            </div>
            <div className='flex-1 bg-zinc-900'>
                {children}
            </div>l̥
        </div>
      </main>
    </>
  )
}

export default Rootlayout
