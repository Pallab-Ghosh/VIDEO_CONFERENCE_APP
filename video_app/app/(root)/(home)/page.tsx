import MeetingTypeList from '@/components/MeetingTypeList';
import Image from 'next/image'
import React from 'react'

const Homepage = () => {

  const now =new Date();//get date and time
  const time = now.toLocaleTimeString('en-IN',{hour :'2-digit' , minute :'2-digit'});
  const date = (new Intl.DateTimeFormat('en-IN' ,{dateStyle : 'full'} )).format(now)
  const time_mode = time.slice(6,8);//get the time mode separately am/pm
  const new_time = time.slice(0,5) // get the time separately


  return (
    <section className='flex size-full flex-col gap-12 2xl:gap-28 text-white mt-10 sm:mt-0'>

      <div className='h-[300px] w-full rounded-[20px] bg-slate-800 bg-cover flex flex-col relative' >
             <div className='absolute top-8 left-8 z-10 px-4 py-2 text-white flex flex-col max-md:py-8 lg:px-11'>
                 <h2 className='rounded-md text-slate-400 bg-slate-700 max-w-[290px] h-12 text-center p-3  font-bold text-base'> Upcoming Meetings at 12.30 PM </h2>
                  
                  <div className=' flex flex-col py-12 md:py-20  gap-3'>
                    <h1 className=' font-extrabold text-6xl lg:text-7xl'>{new_time} <span className=' text-3xl'>{time_mode}</span></h1>
                    <p className=' text-xl font-medium'>{date}</p>
                  </div>
             </div> 
            <Image  src="/image/hero-background.png"  alt='bg'  height={300}  width={1400}  className=' max-md:hidden flex-1 rounded-[20px]' />
      </div>
       
        <MeetingTypeList/>
    </section>
  )
}

export default Homepage