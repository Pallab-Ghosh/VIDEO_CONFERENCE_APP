'use client'
import { Button } from '@/components/ui/button';
import { useCall, useCallStateHooks, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'



type MeetingSetupProps ={
    setIsSetupComplete : (value:boolean)=>void
}

const MeetingSetup = ({setIsSetupComplete}:MeetingSetupProps) => {

    
     const [isMicCamOn , setisMicCamOn] = useState(false)
     const call = useCall();

    if(!call) throw new Error('No call is found');

    useEffect(()=>{
      
        if(isMicCamOn)
        {
            call?.camera.disable();
            call?.microphone.disable();
        }
        else
        {
            call?.camera.enable();
            call?.microphone.enable();

        }
      
    }, [isMicCamOn, call?.camera , call?.microphone])

  return (
    <div className='h-screen flex w-full flex-col items-center justify-center gap-3 text-white px-2'>
        <h1 className=' text-2xl font-bold'>Meeting Preview</h1>
         <VideoPreview/>
          <label>  { !isMicCamOn ? 'join the Camera and Microphone': 'Off the Camera and Microphone'}</label>
          <input  checked={isMicCamOn}   type='checkbox'  onChange={(e)=>setisMicCamOn(e.target.checked)}  />
          <Button onClick={()=>setIsSetupComplete(true)}  className=' bg-lime-500'>
             Join the Meeting
          </Button>
    </div>
  )
}

export default MeetingSetup