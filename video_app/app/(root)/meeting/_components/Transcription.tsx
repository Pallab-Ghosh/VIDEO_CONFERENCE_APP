import { useCall, useCallStateHooks, TranscriptionSettingsModeEnum, } from '@stream-io/video-react-sdk';
import { useState } from 'react';
  


  export const Transcription = () => {


    const call = useCall();

    const { useCallSettings, useIsCallTranscribingInProgress } = useCallStateHooks();
    const [isTranscribing , SetisTranscribing] = useState(false);
   

    const handle_Click = ()=>{
         
          
          
    }
  
    

    return (
      <button onClick={handle_Click}  >
        {isTranscribing ? 'Stop transcription' : 'Start transcription'}
      </button>
    );
  };