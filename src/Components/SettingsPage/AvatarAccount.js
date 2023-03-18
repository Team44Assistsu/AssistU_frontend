import React, { Component } from "react";
import { Modal, Button, TextBox } from "../../Atoms";
import "./style.scss";
import defaultAvatar from "../../Assests/images/a.png";

class AvatarAccount extends Component {
  state = {
    alterName: "",
    description: "",
  };
  componentDidMount() {
    console.log(this.props);
  }
  componentDidUpdate(prevProps) {
    const prev = prevProps?.SettingsReducer;
    const cur = this.props?.SettingsReducer;
    if (
      prev.settingAvatar !== cur.settingAvatar &&
      cur?.settingAvatar &&
      cur?.isAvatarUpdated
    ) {
      this.props.close();
    }
  }
  AvatarAccount = () => {
    const { alterName, description } = this.state;
    let err = {};
    if (alterName && description) {
      this.setState({ errors: {} });
      const alterId = localStorage.getItem("alterId");
      const isHost = localStorage.getItem("host");
      this.props.settingActions.updateAvatar({
        alterName: alterName,
        description: description,
        alterId: alterId,
      });
    } else if (this.state.alterName === "" && this.state.description === "") {
      err.alterName = "AlterName is Missing";
      err.description = "Description is Missing";
      this.setState({ errors: err });
    } else if (this.state.alterName === "") {
      err.alterName = "AlterName is Missing";
      this.setState({ errors: err });
    } else if (this.state.description === "") {
      err.description = "Alter Description is Missing";
      this.setState({ errors: err });
    }
  };
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
              <TextBox
                title={"Avatar Name"}
                value={this.state.alterName}
                onChange={(e) => this.setState({ alterName: e.target.value })}
                error={this.state.errors?.alterName}
                helperText={this.state.errors?.alterName}
              />
              <TextBox
                title={"Avatar Bio"}
                value={this.state.description}
                onChange={(e) => this.setState({ description: e.target.value })}
                error={this.state.errors?.description}
                helperText={this.state.errors?.description}
              />
            </div>
          </div>
          <Button onClick={this.AvatarAccount} text={"Update"} />
        </div>
      </Modal>
    );
  }
}
export default AvatarAccount;
