// Importing necessary dependencies and components
import React, { Component } from "react";
import { Modal, Button, TextBox } from "../../Atoms";
import "./style.scss";
import defaultAvatar from "../../Assests/images/a.png";
// class component for AvatarAccount
class AvatarAccount extends Component {
  state = {
    alterName: "",
    description: "",
  };
  //component mounts, used to fetch the alter details from the store
  componentDidMount() {
    const alterDetail = this.props.SettingsReducer?.settingGetAlter;
    this.setState({
      alterName: alterDetail?.alterName,
      description: alterDetail?.description,
    });
  }
  //component updates, used to get the updated avatar details and close
  componentDidUpdate(prevProps) {
    const prev = prevProps?.SettingsReducer;
    const cur = this.props?.SettingsReducer;
    if (
      prev.settingAvatar !== cur.settingAvatar &&
      cur?.settingAvatar &&
      cur?.isAvatarUpdated
    ) {
      const alterId = localStorage.getItem("alterId");
      const patientId = localStorage.getItem("patientId");
      this.props.settingActions.getAlterById({ alterId, patientId });
      this.props.close();
    }
  }
  // Function to handle the avatar update event
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
        host: isHost === "true" ? true : false,
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
  // Render function of the avataraccount component
  render() {
    return (
      <Modal
        className='ModelAvatar'
        open={this.props.open}
        handleClose={this.props.close}
        close
      >
        <div className='AvatarAccount'>
          <div className='avatarAccountChange'>
            <img id='defaultAvatar' src={defaultAvatar} alt='Default avatar' />
            <div className='avatarText'>
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
