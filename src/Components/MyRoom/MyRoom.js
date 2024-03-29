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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

//class component for the room
class CreateRoom extends Component {
  state = {
    selectedAlter: null, // initialize state with selectedAlter set to null
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
    // get the id of the current user's alter from local storage
    const alterId = localStorage.getItem("alterId");
    // dispatch action to get all messages sent to the current user's alter
    this.props.messageActions.getMessage({ receiverId: alterId });
    const patientId = localStorage.getItem("patientId");
    this.props.messageActions.getMessage({ receiverId: alterId });
    this.props.avatarActions.getAvatar({ patientId });
    this.setState({ alterId });
  }
  alterSelected = (alter) => {
    // update state with the selected alter
    this.setState({ selectedAlter: alter });
  };

  sendMessage = () => {
    const { reply, alterId, selectedAlter } = this.state;
    if (reply) {
      this.props?.messageActions?.sendMessage({
        from: alterId,
        text: reply,
        recevierIds: [selectedAlter?.fromAlter?.alterId],
      });
    }
  };
  replyMessage = () => {
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
        <NavigationBar isRoom />
        <div>
          <div className="main-mroom">
            <div className="title">My Room Space</div>
            <div className="button_create">
              <Button
                text={"Send Message"}
                primary
                onClick={() => this.setState({ sendMessageModal: true })}
              />
            </div>
          </div>
          <div className="RoomChatSpace">
            <div className="unityspace">
              {this.state.selectedAlter &&
                this.state.selectedAlter?.fromAlter &&
                this.state.selectedAlter?.fromAlter?.alterName && (
                  <div className="altertag">
                    {this.state.selectedAlter?.fromAlter?.alterName}
                  </div>
                )}
              <UnityWebGl />
              <div className="supportText">
                t/T: for talking the message | l/L: for listening the message |
                h/H: to wave
              </div>
            </div>
            <div className="ChatSapce">
              {this.state.selectedAlter ? (
                <div className="replySection">
                  <div className="message-title">
                    <ArrowBackIcon
                      onClick={() => this.setState({ selectedAlter: null })}
                    />{" "}
                    From:{" "}
                    {this.state.selectedAlter &&
                      this.state.selectedAlter?.fromAlter &&
                      this.state.selectedAlter?.fromAlter?.alterName}
                  </div>
                  <div className="message-sec">
                    <div className="message">
                      Message:{" "}
                      {this.state.selectedAlter &&
                        this.state.selectedAlter?.msgText}
                    </div>
                    <TextToSpeech
                      value={this.state.selectedAlter?.msgText}
                      className="speech-button"
                      voice={
                        this.state.selectedAlter?.fromAlter?.alterGender ===
                        "Female"
                          ? 12
                          : 0
                      }
                    />
                    <TextBox
                      title="Message"
                      value={this.state.reply ? this.state.reply : ""}
                      rows={5}
                      multiline
                      focused={
                        this.state.listenSpeech || this.state.reply
                          ? true
                          : false
                      }
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
                      text="Send"
                      primary
                      endIcon={<SendIcon />}
                      onClick={this.sendMessage}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className="message-title">Messages</div>
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
            className="sendMessageMyRoom"
          >
            <div className="semdMessageModal">
              <div className="message-sec">
                <DropDown
                  label="Select Avatar"
                  options={this.state.options}
                  onChange={(e) =>
                    this.setState({ sendMessageTo: e.target.value })
                  }
                />
                <TextBox
                  title="Message"
                  value={this.state.reply ? this.state.reply : ""}
                  rows={10}
                  multiline
                  focused={
                    this.state.listenSpeech || this.state.reply ? true : false
                  }
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
                  text="Send"
                  primary
                  endIcon={<SendIcon />}
                  onClick={this.replyMessage}
                />
              </div>
            </div>
          </Modal>
        )}
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
