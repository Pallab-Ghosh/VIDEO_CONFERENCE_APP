'use client'
import { Button } from '@/components/ui/button';
import { DeviceSettings, ToggleVideoPreviewButton, ToggleVideoPublishingButton, useCall, useCallStateHooks, VideoPreview } from '@stream-io/video-react-sdk'
import { Camera, CameraOff, Mic2, MicOff, Video } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import VideoOffPreview from './VideoPreview';
import { cn } from '@/lib/utils';
import { useMicrophoneMute } from '@/hooks/useMicrophone';
import { Loading } from '@/components/Loading';



type MeetingSetupProps ={
    setIsSetupComplete : (value:boolean)=>void
}

const MeetingSetup = ({setIsSetupComplete}:MeetingSetupProps) => {

    
     const [isMicCamOn , setisMicCamOn] = useState(false)
     const call = useCall();
    
     const { useCameraState } = useCallStateHooks();
     const { isMute } = useCameraState();

     const IsMicrophoneMute = useMicrophoneMute()
 

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
      
    }, [isMicCamOn , call?.camera , call?.microphone]) 

  return (
    <div className='h-screen flex  max-w-screen flex-col items-center justify-center gap-3  text-white '>
                
                <h2 className=' text-white sm:text-2xl font-bold'> Meeting Preview</h2>
                
                  <VideoPreview  DisabledVideoPreview={VideoOffPreview} />
                
               
                <div className="flex h-16 items-center justify-center gap-3">
                    <label className="flex items-center justify-center gap-2 font-medium">
                      <input  type="checkbox"  checked={isMicCamOn} onChange={(e) => setisMicCamOn(e.target.checked)} />
                        Join with mic and camera off
                    </label>
                    <DeviceSettings />
              </div>
            <Button className="rounded-md bg-green-500 px-4 py-2.5"  onClick={() => { 
                call.join(); 
                setIsSetupComplete(true);
               }}
               >
              Join meeting
            </Button>
                                 
    </div>
  )
}

export default MeetingSetup