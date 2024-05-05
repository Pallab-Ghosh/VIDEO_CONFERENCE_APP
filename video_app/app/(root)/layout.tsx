import React from 'react'


type ApplayoutProps = {
    children : React.ReactNode
}
const Applayout = ({children}:ApplayoutProps) => {
  return (
    <main>
     {children}
    </main>
  )
}

export default Applayout