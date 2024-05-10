import StreamVideoProvider from '@/provider/StreamClientProvider'
import React from 'react'


type ApplayoutProps = {
    children : React.ReactNode
}
const Applayout = ({children}:ApplayoutProps) => {
  return (
   
    <main>
      <StreamVideoProvider>
         {children}
      </StreamVideoProvider>
    </main>
  )
}

export default Applayout