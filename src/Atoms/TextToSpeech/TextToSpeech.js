//Import the react component and reach speech package
import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
//Functional component for text to speech
const Texttospeech = (props) => {
  const { speak, voices } = useSpeechSynthesis();
  return (
    <div
      className={props.className}
      onClick={() =>
        speak({ text: props.value, voice: voices[props?.voice || 0] })
      }
    >
      Speak
    </div>
  );
};

export default Texttospeech;
