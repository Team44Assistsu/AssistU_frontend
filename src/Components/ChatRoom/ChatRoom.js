import React, { Component } from "react";
import "./style.scss";
import ChatAvatar from "../../Atoms/ChatAvatar/ChatAvatar";
import avatar3 from "../../Assests/images/af1.png";
import avatar2 from "../../Assests/images/af13.png";
import avatar1 from "../../Assests/images/am2.png";
import Modal from "../../Atoms/Modal/Modal";
import { Canvas } from "@react-three/fiber";
import Experience from "../../Atoms/ThreeD/Experience";
import Button from "../../Atoms/Button/Button";
import Speech from "../../Atoms/TextToSpeech/TextToSpeech";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as messageAction from "../../redux/action/messageActions";
import TextBox from "../../Atoms/TextBox/TextBox";

class Chatroom extends Component {
  state = {
    openModal: false,
    message: null,
    reply: null,
  };

  componentDidMount() {
    console.log(this.props);
    const alterId = localStorage.getItem("alterId");
    this.props.messageActions.getMessage({ receiverId: alterId });
  }

  componentDidUpdate(prevProps) {
    const cur = this.props?.MessageReducer;
    const prev = prevProps?.MessageReducer;
    if (prev?.getMessage !== cur?.getMessage && cur?.getMessage) {
      console.log(cur.getMessage);
    }
  }

  render() {
    console.log(this.props);

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
          {this.props?.MessageReducer?.getMessage?.map((message, index) => {
            return (
              <ChatAvatar
                key={index}
                image={
                  message?.fromAlter?.alterId % 3 == 0
                    ? avatar1
                    : message?.fromAlter?.alterId % 3 == 1
                    ? avatar2
                    : avatar3
                }
                name={message?.fromAlter?.alterName}
                onClick={() => this.setState({ openModal: true, message })}
              />
            );
          })}
        </div>
        {this.state.openModal && (
          <Modal
            open={this.state.openModal}
            handleClose={() =>
              this.setState({ openModal: false, message: null })
            }
            close
          >
            <div className='modal3Dmessage'>
              <Canvas
                className='canva'
                camera={{ position: [1, 1.5, 2.5], fov: 50 }}
                shadows
              >
                <Experience />
              </Canvas>
              <div className='message-sec'>
                <div className='ChatSec'>
                  <div className='message-title'>Message Section</div>
                  <div className='message-text'>
                    {this.state.message?.msgText}
                  </div>
                  <Speech
                    value={this.state.message?.msgText}
                    className='speech-button'
                  />
                </div>
                <div className='message-send'>
                  <TextBox
                    title='Reply'
                    value={this.state.reply}
                    maxRows={10}
                    onChange={(e) => this.setState({ reply: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  MessageReducer: state.MessageReducer,
});

function mapDispatchToProps(dispatch) {
  return {
    messageActions: bindActionCreators(messageAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
