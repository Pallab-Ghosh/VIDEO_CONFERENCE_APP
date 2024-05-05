'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../../../lib/utils';

type SideBarProps ={
    label : string
    src : string
    icon : string
}

export const SidebarRoutes = ({label , src , icon}:SideBarProps) => {
   
  const pathName = usePathname();
  const isActive = pathName === src || pathName.startsWith(src);
  return (
     <Link href={src}
      className={cn('font-medium text-lg text-zinc-100 h-12' ,
        isActive && 'bg-blue-600'
       )}
      
      >
      <div className='flex gap-x-4 pt-3'>
         <Image src={icon} alt='link'width={20}  height={20}/>
         <div>{label}</div>
      </div>
     
     </Link>
  )
}
