import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

type SideBarProps ={
    label : string
    src : string
    icon : string
}

export const SidebarRoutes = ({label , src , icon}:SideBarProps) => {
  return (
     <Link href={src} className='font-medium text-lg text-zinc-100'>
      {label}
      <Image
        src={icon}
        alt='link'
        width={20}
        height={20}
      />
     </Link>
  )
}
