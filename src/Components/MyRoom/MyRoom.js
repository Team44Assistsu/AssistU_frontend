import React, { Component } from "react";
import { NavigationBar, UnityWebGl, ChatAvatar } from "../../Atoms";
import "./style.scss";
import AvatarList from "../../avataricon";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as messageAction from "../../redux/action/messageActions";
import * as avatarAction from "../../redux/action/avatarActions";

class CreateRoom extends Component {
  state = {
    // openModal: false,
    // message: null,
    // reply: null,
    // sendMessageModal: false,
    // options: [],
    // sendMessageTo: null,
    // alterId: null,
    // listenSpeech: false,
  };
  componentDidMount() {
    const alterId = localStorage.getItem("alterId");
    this.props.messageActions.getMessage({ receiverId: alterId });
  }
  render() {
    return (
      <>
        <NavigationBar isRoom />
        <div>
          <div className='title'>My Room Space</div>
          <div className='RoomChatSpace'>
            <UnityWebGl />
            <div className='ChatSapce'>
              <div className='message-title'>Messages</div>
              {this.props?.MessageReducer?.getMessage?.map((message, index) => {
                return (
                  <ChatAvatar
                    customMessage={message?.msgText}
                    key={index}
                    image={AvatarList[message?.fromAlter?.profImgKey]}
                    name={message?.fromAlter?.alterName}
                    onClick={() => this.setState({ openModal: true, message })}
                  />
                );
              })}
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
