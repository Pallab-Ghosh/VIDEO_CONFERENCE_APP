'use client'
import HomeCard from '@/app/(root)/(home)/HomeCard'
import { PlusSquare } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MeetingTypeList = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
          <HomeCard bgcolor="bg-orange-400" Imagesrc ="/icons/add-meeting.svg" h2text="New Meeting" ptext="Setup a New Meeting"/>
          <HomeCard bgcolor="bg-blue-500" Imagesrc ="/icons/add-meeting.svg" h2text="New Meeting" ptext="Setup a New Meeting"/>
          <HomeCard bgcolor="bg-violet-600" Imagesrc ="/icons/add-meeting.svg" h2text="New Meeting" ptext="Setup a New Meeting"/>
          <HomeCard bgcolor="bg-amber-400" Imagesrc ="/icons/add-meeting.svg" h2text="New Meeting" ptext="Setup a New Meeting"/>
    </section>
  )
}

export default MeetingTypeList