import React, { Component } from "react";
import { Modal, Button, TextBox } from "../../Atoms";
import "./style.scss";
import defaultAvatar from "../../Assests/images/a.png";
class AvatarAccount extends Component {
  render() {
    return (
      <Modal
        className="ModelAvatar"
        open={this.props.open}
        handleClose={this.props.close}
        close
      >
        <div className="AvatarAccount">
          <div className="avatarAccountChange">
            <img id="defaultAvatar" src={defaultAvatar} alt="Default avatar" />
            <div className="avatarText">
              <TextBox title={"Avatar Name"} />
              <TextBox title={"Avatar Bio"} />
            </div>
          </div>
          <Button onClick={() => ""} text={"Update"} />
        </div>
      </Modal>
    );
  }
}

export default AvatarAccount;
