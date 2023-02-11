import React, { Component } from "react";
import "./style.scss";
import ChatAvatar from "../../Atoms/ChatAvatar/ChatAvatar";
import avatar1 from "../../Assests/images/af1.png";
import avatar2 from "../../Assests/images/af13.png";
import Modal from "../../Atoms/Modal/Modal";
import { Canvas } from "@react-three/fiber";
import Experience from "../../Atoms/ThreeD/Experience";
import Button from "../../Atoms/Button/Button";
import Speech from "../../Atoms/TextToSpeech/TextToSpeech";

class Chatroom extends Component {
  state = {
    openModal: false,
  };
  render() {
    return (
      <div className='ChatRoom'>
        <div className='button_create'>
          <Button
            text={"Send Message"}
            primary
            onClick={() => alert("On progress")}
          />
        </div>
        <div className='title'>Chat Room</div>
        <div className='subtitle'>
          Welcome, buddy! Today is going to be great for you are here!
        </div>
        <div className='chat-space'>
          <ChatAvatar
            image={avatar1}
            name={"Avatar 1"}
            onClick={() => this.setState({ openModal: true })}
          />
          <ChatAvatar
            image={avatar2}
            name={"Avatar 2"}
            onClick={() => this.setState({ openModal: true })}
          />
        </div>
        {this.state.openModal && (
          <Modal
            open={this.state.openModal}
            handleClose={() => this.setState({ openModal: false })}
          >
            <div className='modal3Dmessage'>
              <Canvas
                className='canva'
                camera={{ position: [1, 1.5, 2.5], fov: 50 }}
                shadows
              >
                <Experience />
              </Canvas>
              {/* <Interface /> */}
              <div className='ChatSec'>
                <div>Message Section</div>
                <Speech value='Hey there' />
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default Chatroom;
