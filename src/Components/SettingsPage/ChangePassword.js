import React, { Component } from "react";
import { Modal, Button, TextBox } from "../../Atoms";
class ChangePassword extends Component {
  state = {
    oldPassword: "",
    newPassword: "",
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
    const { oldPassword, newPassword, confirmPassword } = this.state;
    let err = {};
    if (oldPassword && newPassword && confirmPassword) {
      this.setState({ errors: {} });
      const alterId = localStorage.getItem("alterId");
      const isHost = localStorage.getItem("host");
      this.props.settingActions.updateAlterPassword({
        oldPin: Number(oldPassword),
        newPin: Number(newPassword),
        alterId: Number(alterId),
        host: isHost === "true" ? true : false,
      });
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
    } else if (this.state.newPassword === "") {
      err.newPassword = "New Password is Missing";
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
            <TextBox
              title={"Old Password"}
              required
              value={this.state.oldPassword}
              onChange={(e) => this.setState({ oldPassword: e.target.value })}
              error={this.state.errors?.oldPassword}
              helperText={this.state.errors?.oldPassword}
            />
            <TextBox
              title={"New Password"}
              required
              value={this.state.newPassword}
              onChange={(e) => this.setState({ newPassword: e.target.value })}
              error={this.state.errors?.newPassword}
              helperText={this.state.errors?.newPassword}
            />
            <TextBox
              title={"Confirm New Password"}
              required
              value={this.state.confirmPassword}
              onChange={(e) =>
                this.setState({ confirmPassword: e.target.value })
              }
              error={this.state.errors?.confirmPassword}
              helperText={this.state.errors?.confirmPassword}
            />
          </div>
          <Button onClick={this.updatePassword} text={"Update"} />
        </div>
      </Modal>
    );
  }
}

export default ChangePassword;
