import React, { Component } from "react";
import "./style.scss";
import ChatAvatar from "../../Atoms/ChatAvatar/ChatAvatar";
import avatar1 from "../../Assests/images/af1.png";
import avatar2 from "../../Assests/images/af13.png";
import Modal from "../../Atoms/Modal/Modal";

class Chatroom extends Component {
  state = {
    openModal: false,
  };
  render() {
    return (
      <div className='ChatRoom'>
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
            <div>Hey</div>
          </Modal>
        )}
      </div>
    );
  }
}

export default Chatroom;
