import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"



export const useGetCall = ()=>{
     const [calls , setCalls] = useState<Call[]>([]);
     const client = useStreamVideoClient();
     const [loading , setLoading] = useState(false);

     const {user }= useUser();

      useEffect(()=>{
         
        const loadCalls = async()=>{
            if(!client || !user)
                return;
            
            setLoading(true);

            try
             {
                //const inNext30mins = new Date(Date.now() + 1000 * 60 * 60 * 30);

                const { calls } = await client.queryCalls({
                    filter_conditions: {
                      $or: [
                        { created_by_user_id: user.id },
                        { members: { $in: [user.id] } },
                           ],
                    },
                  });
                
                  setCalls(calls);

            }
             catch (error) {
                console.log(error);
            }

            finally{
                setLoading(false);
            }
        }

        loadCalls();

      },[client, user?.id])

 
         
    
}