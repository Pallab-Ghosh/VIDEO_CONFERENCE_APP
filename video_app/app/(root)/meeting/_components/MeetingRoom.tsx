import { cn } from '@/lib/utils'
import { CallControls, CallParticipantsList, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"
import { LayoutList } from 'lucide-react'
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

type callLayoutGrid = 'grid' | 'speaker-left' | 'speaker-right' | 'bottom'


type Checked = DropdownMenuCheckboxItemProps["checked"]

const MeetingRoom = () => {

   const [layout , setlayout] = useState<callLayoutGrid>('speaker-left')
   const[showParticipants , setShowParticipants] = useState(false)
   const [showStatus, setShowStatus] = useState<Checked>(false)
   const router = useRouter();

   const CallLayout = ()=>{
    switch (layout) {
      case 'grid':
         return <PaginatedGridLayout  />
         break;

      case 'speaker-left':
        return <SpeakerLayout participantsBarPosition="left" />
        break;

        case 'speaker-right':
          return <SpeakerLayout participantsBarPosition="right" />
          break;

         default:
          return <SpeakerLayout participantsBarPosition="bottom"  />
    }
}  


  return (
    <section className=' h-screen relative w-full overflow-hidden pt-4 text-white'>
              <div className=' relative flex size-full items-center justify-center'>
                    <div className='flex size-full max-w-[1000px] items-center'>
                        <CallLayout/>
                    </div>

                    <div className={cn('h-[calc(100vh-86px)] hidden ml-2' , showParticipants && 'block' )}>
                        <CallParticipantsList onClose={()=>setShowParticipants(false)}   />
                    </div>
              </div>
              <div className='fixed bottom-0 flex w-full items-center justify-center gap-5'>
                  <CallControls onLeave={()=>router.push('/')}/>

                  <DropdownMenu>
                      <div className=' flex items-center'>
                         <DropdownMenuTrigger className=' cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]'>
                            <LayoutList size={20} className=' text-white'/>
                         </DropdownMenuTrigger>
                      </div>


                    <DropdownMenuContent className=' border-dark-1 bg-dark-1 text-white'>
                      <DropdownMenuLabel>Select Layout</DropdownMenuLabel>
                       
                       { ['default','grid' , 'speaker-left' , 'speaker-right']
                        .map((item, index)=>(
                           
                            <DropdownMenuCheckboxItem
                              checked={layout === item}
                              onCheckedChange={()=>setlayout(item as callLayoutGrid)}
                            >
                               {item}
                            </DropdownMenuCheckboxItem>
                        ))
}
                    </DropdownMenuContent>
                </DropdownMenu>               

              </div>
    </section>
  )
}


export default MeetingRoom