import { CallRecording } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'



type CallListProps ={
    calltype : 'ended' | 'upcoming' | 'recordings'
}

const CallList = ({calltype}:CallListProps) => {
   
    const router = useRouter();
    const [recordings, setRecordings] = useState<CallRecording[]>([]);


  return (
    <div>CallList</div>
  )
}

export default CallList