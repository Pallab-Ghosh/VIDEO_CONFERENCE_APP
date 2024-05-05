 
import React from 'react'
import {SidebarRoutes } from './SidebarRoutes'

const All_Routes =[
    {
        label :'Home',
        src : '/',
        icon : '/public/icons/home.svg'
    },

    {
        label :'Upcoming',
        src : '/upcoming',
        icon:'/public/icons/upcoming.svg'
    },

    {
        label :'Previous',
        src : '/previous',
        icon:'/public/icons/previous.svg'
    }
    ,
    {
        label :'Recordings',
        src : '/recordings',
        icon:'/public/icons/recordings.svg'
    },
    {
        label :'Personal Room',
        src : '/personal-room',
        icon:'/public/icons/add-personal.svg'
    }
]

export const Sidebar = () => {

  return (
    <aside className='stick min-h-screen max-sm:hidden lg:w-[264px] justify-start'>
      <div className=' mt-7 pt-8 bg-black flex flex-col gap-y-3 h-full'>
        {
           All_Routes.map((route)=>(
            <SidebarRoutes
             key ={route.src}
             label={route.label}
             src={route.src}
             icon ={route.icon}
            />
           ))
        }
        </div>
    </aside>
  )
}

