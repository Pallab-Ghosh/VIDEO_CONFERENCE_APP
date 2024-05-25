import { Button } from '@/components/ui/button';
import { useCall, useCallStateHooks, TranscriptionSettingsModeEnum, } from '@stream-io/video-react-sdk';
import { useState } from 'react';
  


  export const Transcription = () => {
    const call = useCall();

    const { useCallSettings, useIsCallTranscribingInProgress } = useCallStateHooks();
    const [isTranscribing , SetisTranscribing] = useState(false);
    const [text , setText]  = useState<string>()
     
    const isActive = false;
    const isSpeechDetecte = false;
    const language = 'en-US';


    function handle_Click() {

            const SpeechRecognition  = window.SpeechRecognition || window.webkitSpeechRecognition
            const recognition = new SpeechRecognition();

            recognition.interimResults = true
            recognition.onresult = async function(event) {
                const transcript = event.results[0][0].transcript
                setText(transcript)
            }
             
            recognition.start();
    }
  
    

    return (
       <div>
            <p>{text}</p>
            <Button onClick={handle_Click}>
              start Transcribing
            </Button>

       </div>
    );
  };