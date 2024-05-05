import React from 'react'
import { Sidebar } from './_components/Sidebar'
import { Navbar } from './_components/Navbar'


type HomelayoutProps = {
    children : React.ReactNode
}


const Homelayout = ({children}:HomelayoutProps) => {
  return (
    <main className='relative'>

         <Navbar/>
          
       <div className='flex'>
            <Sidebar/>
             <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14 bg-slate-400'>
                 <div className='w-full'>
                    {children}
                 </div>
             </section>
       </div>
       
  
     
    </main>
  )
}

export default Homelayout