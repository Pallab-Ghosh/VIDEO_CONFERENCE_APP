'use client'
import HomeCard from '@/app/(root)/(home)/HomeCard'
import { PlusSquare } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


type Meeting_type =  'IsJoinMeeting' | 'IsInstantMeeting' | 'IsScheduleMeeting' | undefined;

const MeetingTypeList = () => {

    const [MeetingState ,SetMeetingState]= useState<Meeting_type>();
    const router = useRouter();

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
    </section>
  )
}

export default MeetingTypeList