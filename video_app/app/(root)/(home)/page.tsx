import Image from 'next/image'
import React from 'react'

const Homepage = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[400px] w-full rounded-[20px] mt-10  bg-slate-800 bg-cover flex flex-col relative' >
             <div className='absolute top-8 left-8 z-10 px-4 py-2 text-white'>
              <h2 className=' text-white'> Upcoming Meetings at 12.30 PM </h2>
             </div>
            <Image  src="/image/hero-background.png"  alt='bg'  height={600}  width={1800}  className=' max-md:hidden flex-1 rounded-[20px]' />
             
      </div>
    </section>
  )
}

export default Homepage