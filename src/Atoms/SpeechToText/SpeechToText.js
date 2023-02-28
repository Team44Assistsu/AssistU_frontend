import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Button } from "..";
import "./style.scss";

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

  useEffect(() => {
    props.listen(listening);
  }, [listening]);

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }
  }, [browserSupportsSpeechRecognition]);

  return (
    <div className='SpeechToText'>
      <Button
        text={"Start"}
        onClick={() => SpeechRecognition.startListening({ continuous: true })}
      />
      <Button text='Stop' onClick={SpeechRecognition.stopListening} />
      <Button text='Reset' onClick={resetTranscript} />
      <div className='listen'>Microphone: {listening ? "on" : "off"}</div>
    </div>
  );
};

export default SpeechToText;
