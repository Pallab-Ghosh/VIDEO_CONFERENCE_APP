'use client'


import { useMicrophoneMute } from '@/hooks/useMicrophone'
import { cn } from '@/lib/utils'
import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import { BlobOptions } from 'buffer'
import { Camera, CameraOff, Mic, Mic2, MicOff } from 'lucide-react'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'



const VideoOffPreview = () => {

   const IsMicrophoneMute = useMicrophoneMute();
   const call = useCall();
   
   console.log('IsMicrophoneMute' , IsMicrophoneMute)
  return (

    <div className='relative mt-10 h-60 rounded-lg sm:w-96 w-full bg-dark-1 border-2 border-zinc-200   items-center text-white'>
        <div className=' left-32 absolute bottom-9 flex items-center justify-center gap-6 bg-red-600 w-16 rounded-full h-14 '>
             <CameraOff  height={30} width={30} onClick={()=>call?.camera.enable()} /> 
        </div>

        <div className={cn(' absolute bottom-9 right-28 flex items-center justify-center gap-6  w-16 rounded-full h-14',IsMicrophoneMute && 'bg-red-600' , !IsMicrophoneMute && 'bg-transparent'  )}>
            {
                !IsMicrophoneMute ? <Mic2  height={30} width={30} onClick={()=>call?.microphone.disable()} /> : <MicOff  height={30} width={30} onClick={()=>call?.microphone.enable()} />  
            } 
        </div>
          
    </div>
  )
}

export default VideoOffPreview