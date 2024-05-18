
'use client'
 
type MeetingCardProps = {
   
    icon?              : string
    title?             : string
    date ?             : Date
    isPreviousMeeting : boolean
    buttonIcon1?      : string
    hanldeClick ?      : ()=>void
    link              : string
    buttonText?        : string 
}


 const MeetingCard = ({ icon , title , date , isPreviousMeeting , buttonIcon1 , buttonText , hanldeClick , link}:MeetingCardProps) => {
   return (
     <div>MeetingCard</div>
   )
 }
 
 export default MeetingCard