import React, { Component } from "react";
import { Modal, Button, TextBox } from "../../Atoms";
class ChangePassword extends Component {
  render() {
    return (
      <Modal
        className="ModelChangePassword"
        open={this.props.open}
        handleClose={this.props.close}
        close
      >
        <div className="title"> Change Password</div>
        <div className="Changepassword">
          <div className="PasswordText">
            <TextBox title={"Old Password"} />
            <TextBox title={"New Password"} />
            <TextBox title={"Confirm New Password"} />
          </div>
          <Button onClick={() => ""} text={"Update"} />
        </div>
      </Modal>
    );
  }
}

export default ChangePassword;
