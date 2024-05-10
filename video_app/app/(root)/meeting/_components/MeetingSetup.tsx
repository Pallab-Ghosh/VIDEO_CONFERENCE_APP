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
     const { useCameraState } = useCallStateHooks();
     const { camera, isMute } = useCameraState();

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
      
    }, [isMicCamOn])

  return (
    <div className='h-screen flex w-full flex-col items-center justify-center gap-3 text-white px-2'>
        <h1 className=' text-2xl font-bold'>Meeting Preview</h1>
          
          {
           !isMute? <VideoPreview/>:(
             <div className=' h-52 rounded-lg sm:w-96 w-full bg-dark-1 border-2 border-zinc-200 flex justify-center items-center text-white'>
                No Preview Available
             </div>
           )
          }
          <label>  { !isMicCamOn ? 'join the Camera and Microphone': 'Off the Camera and Microphone'}</label>
          <input  checked={isMicCamOn}   type='checkbox'  onChange={(e)=>setisMicCamOn(e.target.checked)} style={{backgroundColor:'greenyellow'}}  />
          <Button onClick={()=>setIsSetupComplete(true)}  className=' bg-lime-500'>
             Join the Meeting
          </Button>
    </div>
  )
}

export default MeetingSetup