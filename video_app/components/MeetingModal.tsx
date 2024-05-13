import { Button, buttonVariants } from "@/components/ui/button"
import { Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import Image from "next/image"
 
 
type MeetingModalProps = {
    IsOpen     : boolean,
    OnClose    : ()=>void,
    title      : string,
    buttonText : string
    handleClick: ()=>void,
    children?  : React.ReactNode , 
    image?     : string
    buttonIcon? : string
    clasName?   : string
    scheduleMeeting: boolean
}


export function MeetingModal({IsOpen , OnClose , title , buttonText ,scheduleMeeting, handleClick , image , children , buttonIcon , clasName}:MeetingModalProps) {

  return (
    <Dialog open={IsOpen} onOpenChange={OnClose}>
          <DialogContent className="max-w-[550px] w-full flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
              <div className=" flex flex-col gap-6">
                    {
                      image && (
                        <div>
                            <Image src={image} alt="image" width={72} height={72}  />
                        </div>
                      )
                    }
                      <p className={cn(" text-center font-bold text-lg leading-[42px]",clasName)}>{title}</p>
                        {children}
                      <Button  disabled={scheduleMeeting} className=" w-full bg-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0" onClick={handleClick}>
                        {buttonText  || 'Schedule Meeting'}
                      </Button>
              </div>
          </DialogContent>
    </Dialog>
  )
}
