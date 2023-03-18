import React, { Component } from "react";
import { Modal, CheckBox, Button } from "../../Atoms";

class HostAndCohost extends Component {
  state = {
    alterList: [],
  };

  componentDidMount() {
    console.log(this.props);
  }
  componentDidUpdate(prevProps) {
    const prev = prevProps?.SettingsReducer;
    if (
      prev.settingsGetAvatar !== cur.settingsGetAvatar &&
      cur?.settingsGetAvatar &&
      cur?.isGetAvatarDetails
    ) {
    }

    const cur = this.props?.SettingsReducer;
    if (
      prev.settingCoHost !== cur.settingCoHost &&
      cur?.settingCoHost &&
      cur?.isCoHostUpdated
    ) {
      this.props.close();
    }
  }
  updateCohost = () => {
    const { alterList } = this.state;
    this.props.SettingsReducer.updateGetAlterList({
      alterList: Response.result,
    });
    this.props.settingActions.updateCohost({
      // oldPin: Number(oldPassword),
      // newPin: Number(newPassword),
      // alterId: Number(alterId),
      // host: isHost === "true" ? true : false,
    });
  };
  updateAlter = (value, id, index) => {
    const alterList = this.state;
    const alterdetail = alterList[index];
    if (alterdetail.alterId === id) {
      alterdetail.cohost = value;
      alterList[index] = alterdetail;
    }
    this.setState({ alterList });
  };
  render() {
    // const Alters = [
    //   { id: 1, Alter: "Avatar1" },
    //   { id: 2, Alter: "Avatar2" },
    //   { id: 3, Alter: "Avatar3" },
    //   { id: 4, Alter: "Avatar4" },
    //   { id: 5, Alter: "Avatar5" },
    //   { id: 6, Alter: "Avatar6" },
    // ];
    return (
      <Modal
        className="ModelHostAndCohost"
        open={this.props.open}
        handleClose={this.props.close}
        close
      >
        <div className="title">Co-Host Permissions Access </div>
        <div className="Co-HostStyle">
          <div>
            {this.state.alterList.map((alter, index) => (
              <div className="TextStyle" key={alter.alterId}>
                {alter.alterId}
                <CheckBox
                  onClick={(e) =>
                    this.updateAlter(e.target.value, alter.alterId, index)
                  }
                  value={alter.cohost}
                />
              </div>
            ))}
          </div>

          <Button onClick={this.updateCohost} text={"Submit"} />
        </div>
      </Modal>
    );
  }
}

export default HostAndCohost;
