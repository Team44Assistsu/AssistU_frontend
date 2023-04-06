import React, { Component } from "react";
import { Modal, Button, TextBox } from "../../Atoms";
class ChangeLoginPassword extends Component {
  state = {
    oldLoginPassword: "",
    newLoginPassword: "",
    confirmLoginPassword: "",
  };
  // Log the props when the component mounts
  componentDidMount() {
    console.log(this.props);
  }
  // Check if the settingLoginPassword has changed and if the new password has been set
  componentDidUpdate(prevProps) {
    const prev = prevProps?.SettingsReducer;
    const cur = this.props?.SettingsReducer;
    if (
      prev.settingLoginPassword !== cur.settingLoginPassword &&
      cur?.settingLoginPassword &&
      cur?.isSettngLoginPassword
    ) {
      this.props.close();
    }
  }
  //function to update the login password
  updateLoginPassword = () => {
    const { oldLoginPassword, newLoginPassword, confirmLoginPassword } =
      this.state;
    let err = {};
    if (oldLoginPassword && newLoginPassword && confirmLoginPassword) {
      this.setState({ errors: {} });

      const alterId = localStorage.getItem("alterId");
      const isHost = localStorage.getItem("host");
      this.props.settingActions.updateLoginPassword({
        oldPassword: oldLoginPassword,
        newPassword: newLoginPassword,
        alterId: Number(alterId),
        host: isHost === "true" ? true : false,
      });
    } else if (
      this.state.oldLoginPassword === "" &&
      this.state.newLoginPassword === "" &&
      this.state.confirmLoginPassword === ""
    ) {
      err.oldLoginPassword = "old PassWord is Missing";
      err.newLoginPassword = "New Password is Missing";
      err.confirmLoginPassword = "confirm Password is Missing";
      this.setState({ errors: err });
    } else if (this.state.oldLoginPassword === "") {
      err.oldLoginPassword = "Old Password is Missing";
      this.setState({ errors: err });
    } else if (this.state.newLoginPassword === "") {
      err.newLoginPassword = "New Password is Missing";
      this.setState({ errors: err });
    } else if (this.state.confirmLoginPassword === "") {
      err.confirmLoginPassword = "confirm Password is Missing";
      this.setState({ errors: err });
    }
  };
  //render the function component
  render() {
    return (
      <Modal
        className="ModelChangePassword"
        open={this.props.open}
        handleClose={this.props.close}
        close
      >
        <div className="title"> Change Login Password</div>
        <div className="Changepassword">
          <div className="PasswordText">
            <TextBox
              title={"Old Login Password"}
              required
              value={this.state.oldLoginPassword}
              onChange={(e) =>
                this.setState({ oldLoginPassword: e.target.value })
              }
              error={this.state.errors?.oldLoginPassword}
              helperText={this.state.errors?.oldLoginPassword}
            />
            <TextBox
              title={"New Login Password"}
              required
              value={this.state.newLoginPassword}
              onChange={(e) =>
                this.setState({ newLoginPassword: e.target.value })
              }
              error={this.state.errors?.newLoginPassword}
              helperText={this.state.errors?.newLoginPassword}
            />
            <TextBox
              title={"Confirm New Login Password"}
              required
              value={this.state.confirmLoginPassword}
              onChange={(e) =>
                this.setState({ confirmLoginPassword: e.target.value })
              }
              error={this.state.errors?.confirmLoginPassword}
              helperText={this.state.errors?.confirmLoginPassword}
            />
          </div>
          <Button onClick={this.updateLoginPassword} text={"Update"} />
        </div>
      </Modal>
    );
  }
}

export default ChangeLoginPassword;
