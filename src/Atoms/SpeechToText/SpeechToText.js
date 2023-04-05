//import the dependencies and componnets from packages
import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Button } from "..";
import "./style.scss";
// Define SpeechToText component
const SpeechToText = (props) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    props.change(transcript);
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
