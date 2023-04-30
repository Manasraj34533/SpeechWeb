import React,{useState} from "react";

import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";

function App() {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy,{successDuration:2000});
  const {
    transcript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const startListening = () => SpeechRecognition.startListening({ continuous: true ,language:"en-IN"});


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }  


  return (
    <div className="App">
      <div className="container">
        <h1>Speech To Text</h1>
        <p>A React hook that converts speech from the microphone to text and makes it available to your React components.</p>
        <div className="speech-container" onClick={()=> setTextToCopy(transcript)}>
              {transcript}
        </div>
        <div className="buttons">
        <button onClick={setCopied}>
        {isCopied ? "Copied" : "Copy to clickboard"}
        </button>
            <button onClick={startListening}>Start Listning</button>
            <button onClick={SpeechRecognition.stopListening}>Stop Listning</button>
        </div>
      </div>
    </div>
  );
}

export default App;
