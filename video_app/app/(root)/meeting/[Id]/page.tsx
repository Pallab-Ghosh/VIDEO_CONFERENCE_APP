 
import { redirect } from 'next/navigation'
import React from 'react'

type MeetingIdpageProps = {
    params:{
        Id:string
    }
}

const MeetingIdpage = ({params}:MeetingIdpageProps) => {


  return (
    <div>meeting id page {params.Id} </div>
  )
}

export default MeetingIdpage