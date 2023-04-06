//import the dependencies and componnets from packages
import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Button } from "..";
import "./style.scss";
import useKeypress from "react-use-keypress";

// Define SpeechToText component
const SpeechToText = (props) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  useKeypress(["l", "L", "Enter"], (event) => {
    if (event.key === "l" || event.key === "L") {
      SpeechRecognition.startListening({ continuous: true });
    } else if (event.key === "Enter") {
      SpeechRecognition.stopListening();
    }
  });
  useEffect(() => {
    props.change(transcript);
    console.log(transcript);
  }, [transcript]);
  // Update parent component state with listening state
  useEffect(() => {
    props.listen(listening);
  }, [listening]);
  // Check if browser supports speech recognition
  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }
  }, [browserSupportsSpeechRecognition]);
  // Render the component
  return (
    <div className="SpeechToText">
      <Button
        text={"Start"}
        onClick={() => SpeechRecognition.startListening({ continuous: true })}
      />
      <Button text="Stop" onClick={SpeechRecognition.stopListening} />
      <Button text="Reset" onClick={resetTranscript} />
      <div className="listen">Microphone: {listening ? "on" : "off"}</div>
    </div>
  );
};

// Export the component
export default SpeechToText;
