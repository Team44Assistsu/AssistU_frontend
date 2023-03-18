import React, { Component } from "react";
import { Modal, Button, TextBox } from "../../Atoms";
class ChangePassword extends Component {
  state = {
    oldPassword: "",
    NewPassword: "",
    confirmPassword: "",
  };
  componentDidMount() {
    console.log(this.props);
  }
  componentDidUpdate(prevProps) {
    const prev = prevProps?.SettingsReducer;
    const cur = this.props?.SettingsReducer;
    if (
      prev.settingPassword !== cur.settingPassword &&
      cur?.settingPassword &&
      cur?.isPasswordUpdated
    ) {
      this.props.close();
    }
  }
  updatePassword = () => {
    const { oldPassword, NewPassword, confirmPassword } = this.state;
    let err = {};
    if (oldPassword & NewPassword & confirmPassword) {
      this.setState({ errors: {} });
      const alterId = localStorage.getItem("alterId");
      const isHost = localStorage.getItem("host");
      if (!isHost) {
        this.props.settingActions.updateAvatar({
          oldPassword: oldPassword,
          newPassword: NewPassword,
          alterId: alterId,
          host: isHost,
        });
      }
    } else if (
      this.state.oldPassword === "" &&
      this.state.NewPassword === "" &&
      this.state.confirmPassword === ""
    ) {
      err.oldPassword = "old PassWord is Missing";
      err.NewPassword = "New Password is Missing";
      err.confirmPassword = "confirm Password is Missing";
      this.setState({ errors: err });
    } else if (this.state.oldPassword === "") {
      err.oldPassword = "Old Password is Missing";
      this.setState({ errors: err });
    } else if (this.state.NewPassword === "") {
      err.NewPassword = "New Password is Missing";
      this.setState({ errors: err });
    } else if (this.state.confirmPassword === "") {
      err.confirmPassword = "confirm Password is Missing";
      this.setState({ errors: err });
    }
  };
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
          <Button onClick={this.updatePassword} text={"Update"} />
        </div>
      </Modal>
    );
  }
}

export default ChangePassword;
