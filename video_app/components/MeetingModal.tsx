import { Button } from "@/components/ui/button"
import { Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger} from "@/components/ui/dialog"
 
 
type MeetingModalProps = {
    IsOpen     : boolean,
    OnClose    : ()=>void,
    title      : string,
    buttonText : string
    handleClick: ()=>void,
    children?  : React.ReactNode , 
    image?     : string
}


export function MeetingModal({IsOpen , OnClose , title , buttonText , handleClick , image , children}:MeetingModalProps) {

  return (
    <Dialog open={IsOpen} onOpenChange={OnClose}>
      
      <DialogContent className="max-w-[520px] w-full flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
         <div>
            
         </div>
      </DialogContent>
    </Dialog>
  )
}
