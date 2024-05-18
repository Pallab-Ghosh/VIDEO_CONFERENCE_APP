
// @ts-nocheck
'use client'

import { useGetCall } from '@/hooks/useGetCall'
import { Call, CallRecording } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import MeetingCard from './meeting-card'
import { Loading } from './Loading'

 

type CallListProps ={
    calltype : 'ended' | 'upcoming' | 'recordings'
}

const CallList = ({calltype}:CallListProps) => {
   
    const router = useRouter();
    const [recordings, setRecordings] = useState<CallRecording[]>([]);
    const {endedCalls , upcomingCalls , recordingdata , loading} = useGetCall();
    

     if(loading)return <Loading/>



    const handle_call_type = ()=>{
       switch(calltype)
       {
           case 'ended':
             return endedCalls ;

           case 'upcoming':
             return upcomingCalls ;

           case 'recordings':
              return recordings;

            default :
              return [];
       }
    }

      const handle_No_call_message = ()=>{
        switch(calltype)
        {
            case 'ended':
              return 'No Previous Calls' ;
 
            case 'upcoming':
              return 'No Upcoming Calls' ;
 
            case 'recordings':
               return 'No Recordings';
 
             default :
               return '';
        }
      }

     const calls = handle_call_type();
     const msgs = handle_No_call_message();




  return (
     <div className=' grid grid-cols-1 xl:grid-cols-2 gap-5'>
         {
             calls && calls.length > 0 ? calls.map((meeting : Call | CallRecording)=>(

                 <MeetingCard

                    key={(meeting as Call).id}

                    icon = { calltype === 'ended' ? '/icons/previous.svg' :
                       calltype === 'upcoming' ? '/icons/upcoming.svg' : '/icons/recordings.svg' }

                    title = {(meeting as Call ).state.custom.description.substring(0,26) || 'No Description' }

                    date  = {meeting.state.startsAt.toLocaleString() || meeting.start_time.toLocaleString()}

                    isPreviousMeeting = { calltype === 'ended'}

                    buttonIcon1 = {calltype === 'recordings' ? '/public/icons/play.svg' : undefined }

                    hanldeClick = {calltype === 'recordings' ? ()=>router.push(`/meeting/${meeting.url}`) : 
                     ()=>router.push(`/meeting/${meeting.id}`)
                     }
                     
                    link = {calltype === 'recordings' ? meeting.url :
                     `${process.env.NEXT_PUBLIC_URL}/meeting/${meeting.id}`
                    }
                    
                    buttonText = {calltype === 'recordings' ? 'Play' : 'start'}

                 />
             )
            ) :
              
              (<h1 className=' text-white font-bold'>{msgs}</h1>)
         }
          
      </div>
  )
}

export default CallList