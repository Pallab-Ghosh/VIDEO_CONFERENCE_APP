import { Button } from '@/components/ui/button';
import { useCall, useCallStateHooks, TranscriptionSettingsModeEnum, } from '@stream-io/video-react-sdk';
import axios from 'axios';
import { useEffect, useState } from 'react';

  console.log('process.env.NEXT_GOOGLE_API',process.env.NEXT_GOOGLE_API_KEY)


  export const Transcription = () => {
    const call = useCall();

    const { useCallSettings, useIsCallTranscribingInProgress } = useCallStateHooks();

    const [text , setText]  = useState<string>()
    const [translation , settranslation]  = useState<string>()

    const isActive = false;
    const isSpeechDetecte = false;
    const language = 'en-US';


    function handle_Click() {

            const SpeechRecognition  = window.SpeechRecognition || window.webkitSpeechRecognition
                const recognition = new SpeechRecognition();

                recognition.interimResults = false
                recognition.maxAlternatives = 1;
                recognition.continuous = true

             
                recognition.onresult = async function(event) {

                    const transcript = event.results[event.results.length - 1][0].transcript
                    setText(transcript)

                    
                      let res = await axios.post(`https://translation.googleapis.com/language/translate/v2?key=AIzaSyBaagnQuFHgY0fX4ueX1tTKzy4wVrrmNXM`,
                      { q:transcript , target: "tr" }
                      );

                      let translation = res.data.data.translations[0].translatedText;
                      console.log(translation) ;
                      settranslation(translation)
                    }
                   
                recognition.start();   
                  
}



    return (
       <div>
            
            <p>{translation}</p>
            
            <Button onClick={handle_Click}>
              start Transcribing
            </Button>

       </div>
    )
  }