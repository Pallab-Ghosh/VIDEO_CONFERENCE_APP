'use client'
import HomeCard from '@/app/(root)/(home)/_components/HomeCard'
import { MeetingModal } from '@/components/MeetingModal'
import { useUser } from '@clerk/nextjs'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { PlusSquare } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


type Meeting_type =  'IsJoinMeeting' | 'IsInstantMeeting' | 'IsScheduleMeeting' | undefined;

const MeetingTypeList = () => {

    const [MeetingState ,SetMeetingState]= useState<Meeting_type>();
    const router = useRouter();
    const user = useUser();
    const client = useStreamVideoClient();
    const[values , setvalues] = useState({
      dateTime : new Date(),
      description: '',
      link : ''
    })
    const [calldetails , setcalldetails] = useState<Call>()

    const handleClick = async()=>{
      if(!client || !user)
        return;
       
      try
       {
          const id = crypto.randomUUID();
          const call = client.call('default', id);

          if(!call)throw new Error('Call not successfully created');
          
          const startsAt    = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
          const description = values.description || 'Instant Meeting'

          await call.getOrCreate({
            data: {
               starts_at : startsAt,
               custom:{
                description : description
               }
            },
          });
          setcalldetails(call);

          if(!values.description)
            {
                router.push(`/meeting/${call.id}`)
            }
      
       } 

      catch (error) {
        
      }

      
    }


  return (

    <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
  
            <HomeCard
                bgcolor="bg-orange-400" Imagesrc ="/icons/add-meeting.svg"
                h2text="New Meeting" ptext="Start a Instant Meeting"
                handleClick = {()=>SetMeetingState('IsInstantMeeting')}
              />
        
              <HomeCard 
                bgcolor="bg-blue-500" Imagesrc ="/icons/join-meeting.svg"
                h2text="Join Meeting" ptext="Via Invitation Link"
                handleClick = {()=>SetMeetingState('IsJoinMeeting')}
                />
        
             <HomeCard 
              bgcolor="bg-violet-600" Imagesrc ="/icons/scheduling.svg"
              h2text="Schedule Meeting" ptext="Plan your Meeting"
              handleClick = {()=>SetMeetingState('IsScheduleMeeting')}
              />
        
              <HomeCard
                bgcolor="bg-amber-400" Imagesrc ="/icons/recordings.svg"
                h2text="View Recordings" ptext="Meeting Recordings"
                handleClick = {()=>router.push('/recordings')}
                />
        
            <MeetingModal
             IsOpen = {MeetingState === 'IsInstantMeeting'}
             OnClose = {()=>SetMeetingState(undefined)}
             title = "Start an Instant Meeting"
             buttonText = "Start Meeting"
             handleClick={handleClick}
            />

    </section>
  )
}

export default MeetingTypeList