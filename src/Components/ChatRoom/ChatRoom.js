import React, { Component } from "react";
import "./style.scss";
import avatar3 from "../../Assests/images/af1.png";
import avatar2 from "../../Assests/images/af13.png";
import avatar1 from "../../Assests/images/am2.png";
import { Canvas } from "@react-three/fiber";
import Experience from "../../Atoms/ThreeD/Experience";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as messageAction from "../../redux/action/messageActions";
import * as avatarAction from "../../redux/action/avatarActions";
import SendIcon from "@mui/icons-material/Send";
import {
  DropDown,
  TextBox,
  Button,
  TextToSpeech,
  Modal,
  NavigationBar,
  ChatAvatar,
  SpeechToText,
} from "../../Atoms";
import AvatarList from "../../avataricon";

class Chatroom extends Component {
  state = {
    openModal: false,
    message: null,
    reply: null,
    sendMessageModal: false,
    options: [],
    sendMessageTo: null,
    alterId: null,
    listenSpeech: false,
  };

  componentDidMount() {
    const alterId = localStorage.getItem("alterId");
    const patientId = localStorage.getItem("patientId");
    this.props.messageActions.getMessage({ receiverId: alterId });
    this.props.avatarActions.getAvatar({ patientId });
    this.setState({ alterId });
  }

  componentDidUpdate(prevProps) {
    const cur = this.props?.MessageReducer;
    const prev = prevProps?.MessageReducer;
    const curAva = this.props?.AvatarReducer;
    const prevAva = prevProps?.AvatarReducer;

    if (
      prev?.sendMessage !== cur?.sendMessage &&
      cur?.isSendMessage &&
      cur?.sendMessage
    ) {
      this.setState({
        message: null,
        reply: null,
        openModal: false,
        sendMessageTo: null,
        sendMessageModal: false,
      });

      alert("Message Sent Successfully");
    }

    if (
      prevAva?.getAvatar !== curAva?.getAvatar &&
      curAva?.getAvatar &&
      curAva?.isGetAvatar
    ) {
      const { alterId } = this.state;
      const idList = [];
      const options = [];
      curAva?.getAvatar?.map((avatar) => {
        const id = avatar?.alterId;
        if (id != alterId) {
          idList.push(id);
          options.push({
            value: [id],
            option: avatar?.alterName,
          });
        }
        return null;
      });
      curAva?.getAvatar?.length > 2 &&
        options.push({ value: idList, option: "All Avatars" });
      this.setState({ options });
    }
  }

  replyMessage = () => {
    const { message, reply, alterId } = this.state;
    if (reply) {
      this.props?.messageActions?.sendMessage({
        from: alterId,
        text: reply,
        recevierIds: [message?.fromAlter?.alterId],
      });
    }
  };

  sendMessage = () => {
    const { sendMessageTo, reply, alterId } = this.state;
    if (reply) {
      this.props?.messageActions?.sendMessage({
        from: alterId,
        text: reply,
        recevierIds: sendMessageTo,
      });
    }
  };

  render() {
    return (
      <>
        <NavigationBar isChat />
        <div className='ChatRoom'>
          <div className='button_create'>
            <Button
              text={"Send Message"}
              primary
              onClick={() => this.setState({ sendMessageModal: true })}
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
                  image={AvatarList[message?.fromAlter?.profImgKey]}
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
                this.setState({ openModal: false, message: null, reply: "" })
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
                    {console.log(this.state.message)}
                    <TextToSpeech
                      value={this.state.message?.msgText}
                      className='speech-button'
                      voice={
                        this.state.message?.fromAlter?.alterGender === "Female"
                          ? 12
                          : 0
                      }
                      //  parseInt(Math.random() * 10)
                    />
                  </div>
                  <div className='message-send'>
                    <TextBox
                      title='Reply'
                      value={this.state.reply}
                      rows={4}
                      multiline
                      focused={this.state.listenSpeech || this.state.reply}
                      onChange={(e) => this.setState({ reply: e.target.value })}
                    />
                    <SpeechToText
                      change={(transcript) =>
                        this.setState({
                          reply: transcript,
                        })
                      }
                      listen={(listen) =>
                        this.setState({ listenSpeech: listen })
                      }
                      transcript={this.state.reply}
                    />
                    <Button
                      text='Send'
                      primary
                      endIcon={<SendIcon />}
                      onClick={this.replyMessage}
                    />
                  </div>
                </div>
              </div>
            </Modal>
          )}
          {this.state.sendMessageModal && (
            <Modal
              open={this.state.sendMessageModal}
              handleClose={() =>
                this.setState({
                  sendMessageModal: false,
                  reply: "",
                  sendMessageTo: null,
                })
              }
              close
            >
              <div className='semdMessageModal'>
                <Canvas
                  className='canva'
                  camera={{ position: [1, 1.5, 2.5], fov: 50 }}
                  shadows
                >
                  <Experience />
                </Canvas>
                <div className='message-sec'>
                  <DropDown
                    label='Select Avatar'
                    options={this.state.options}
                    onChange={(e) =>
                      this.setState({ sendMessageTo: e.target.value })
                    }
                  />
                  <TextBox
                    title='Message'
                    value={this.state.reply}
                    rows={10}
                    multiline
                    focused={this.state.listenSpeech || this.state.reply}
                    onChange={(e) => this.setState({ reply: e.target.value })}
                  />
                  <SpeechToText
                    change={(transcript) =>
                      this.setState({
                        reply: transcript,
                      })
                    }
                    listen={(listen) => this.setState({ listenSpeech: listen })}
                    transcript={this.state.reply}
                  />
                  <Button
                    text='Send'
                    primary
                    endIcon={<SendIcon />}
                    onClick={this.sendMessage}
                  />
                </div>
              </div>
            </Modal>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  MessageReducer: state.MessageReducer,
  AvatarReducer: state.AvatarReducer,
});

function mapDispatchToProps(dispatch) {
  return {
    messageActions: bindActionCreators(messageAction, dispatch),
    avatarActions: bindActionCreators(avatarAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
