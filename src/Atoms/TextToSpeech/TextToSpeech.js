import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";

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
