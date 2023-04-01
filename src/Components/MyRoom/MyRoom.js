import React, { Component } from "react";
import {
  NavigationBar,
  UnityWebGl,
  ChatAvatar,
  DropDown,
  TextBox,
  Button,
  TextToSpeech,
  Modal,
  SpeechToText,
} from "../../Atoms";
import SendIcon from "@mui/icons-material/Send";
import "./style.scss";
import AvatarList from "../../avataricon";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as messageAction from "../../redux/action/messageActions";
import * as avatarAction from "../../redux/action/avatarActions";

class CreateRoom extends Component {
  state = {
    selectedAlter: null,
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
    this.props.messageActions.getMessage({ receiverId: alterId });

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
  alterSelected = (alter) => {
    console.log(alter);
    this.setState({ selectedAlter: alter });
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
  render() {
    return (
      <>
        <NavigationBar isRoom />
        <div>
          <div className='title'>My Room Space</div>
          <div className='RoomChatSpace'>
            <div className='unityspace'>
              {this.state.selectedAlter &&
                this.state.selectedAlter?.fromAlter &&
                this.state.selectedAlter?.fromAlter?.alterName && (
                  <div className='altertag'>
                    {this.state.selectedAlter?.fromAlter?.alterName}
                  </div>
                )}
              <UnityWebGl />
            </div>
            <div className='ChatSapce'>
              {this.state.selectedAlter ? (
                <div className='replySection'>
                  <div className='message-title'>
                    From:{" "}
                    {this.state.selectedAlter &&
                      this.state.selectedAlter?.fromAlter &&
                      this.state.selectedAlter?.fromAlter?.alterName}
                  </div>
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
                      listen={(listen) =>
                        this.setState({ listenSpeech: listen })
                      }
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
              ) : (
                <>
                  <div className='message-title'>Messages</div>
                  {this.props?.MessageReducer?.getMessage?.map(
                    (message, index) => {
                      return (
                        <ChatAvatar
                          onClick={() => this.alterSelected(message)}
                          customMessage={message?.msgText}
                          key={index}
                          image={AvatarList[message?.fromAlter?.profImgKey]}
                          name={message?.fromAlter?.alterName}
                        />
                      );
                    }
                  )}
                </>
              )}
            </div>
          </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(CreateRoom);
