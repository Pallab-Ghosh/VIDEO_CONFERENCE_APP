import { useGetCall } from '@/hooks/useGetCall'
import { CallRecording } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import MeetingCard from './meeting-card'



type CallListProps ={
    calltype : 'ended' | 'upcoming' | 'recordings'
}

const CallList = ({calltype}:CallListProps) => {
   
    const router = useRouter();
    const [recordings, setRecordings] = useState<CallRecording[]>([]);
    const {endedCalls , upcomingCalls , recordingdata , loading} = useGetCall();
    
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
     <div>
         {
             calls && calls.length > 0 ? calls.map(()=>(
                 <MeetingCard/>
             )) 
             :
               <h1>{msgs}</h1>
         }
          
      </div>
  )
}

export default CallList