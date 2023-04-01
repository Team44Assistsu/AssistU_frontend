import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
// import useKeypress from "react-use-keypress";
const Texttospeech = (props) => {
  const { speak, voices } = useSpeechSynthesis();
  // useKeypress(["t", "T"], (event) => {
  //   if (event.key === "t" || event.key === "T") {
  //     speak({ text: props.value, voice: voices[props?.voice || 0] });
  //   }
  // });
  return (
    <div
      className={props.className}
      onClick={() =>
        speak({ text: props.value, voice: voices[props?.voice || 0] })
      }
      style={{ cursor: "pointer" }}
    >
      Speak
    </div>
  );
};

export default Texttospeech;
