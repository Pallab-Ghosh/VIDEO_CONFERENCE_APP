
'use client'
import { Button } from '@/components/ui/button';
import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation';
import React from 'react'



const EndCallButton = () => {

  const call = useCall();
  const router = useRouter();

   const {useLocalParticipant} = useCallStateHooks();
   const LocalParticipant = useLocalParticipant();
   const isMeetingOwner = LocalParticipant && call?.state.createdBy  && LocalParticipant.userId === call?.state.createdBy.id

   if(!isMeetingOwner)return null;

    const handleClick=async()=>{
       await call.endCall();
       router.push('/');
    }
    

  return (
    <Button onClick={handleClick} className=' bg-red-500'>
          End Call for everyone
    </Button>
  )
}

export default EndCallButton