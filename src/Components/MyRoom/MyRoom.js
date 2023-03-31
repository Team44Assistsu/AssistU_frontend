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
  };
  componentDidMount() {
    const alterId = localStorage.getItem("alterId");
    this.props.messageActions.getMessage({ receiverId: alterId });
  }
  alterSelected = (alter) => {
    console.log(alter);
    this.setState({ selectedAlter: alter });
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
