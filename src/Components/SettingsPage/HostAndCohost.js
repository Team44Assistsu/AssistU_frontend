import React, { Component } from "react";
import { Modal, CheckBox, Button } from "../../Atoms";

class HostAndCohost extends Component {
  state = {
    alterList: [],
  };

  componentDidMount() {
    const alterId = localStorage.getItem("alterId");
    this.props.settingActions.getAlterList({ alterId });
  }
  componentDidUpdate(prevProps) {
    const prev = prevProps?.SettingsReducer;
    const cur = this.props?.SettingsReducer;
    if (
      prev.settingsGetAvatar !== cur.settingsGetAvatar &&
      cur?.settingsGetAvatar &&
      cur?.isGetAvatarDetails
    ) {
      const alterList = cur?.settingsGetAvatar;
      this.setState({ alterList });
    }
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
    this.props.settingActions.updateCohost(alterList);
  };
  updateAlter = (value, id, index) => {
    const { alterList } = this.state;
    const alterdetail = alterList[index];
    if (alterdetail.alterId === id) {
      alterdetail.cohost = value === "on" ? true : false;
      alterList[index] = alterdetail;
    }
    this.setState({ alterList });
  };
  render() {
    return (
      <Modal
        className='ModelHostAndCohost'
        open={this.props.open}
        handleClose={this.props.close}
        close
      >
        <div className='title'>Co-Host Permissions Access </div>
        <div className='Co-HostStyle'>
          <div>
            {this.state.alterList.map((alter, index) => (
              <div className='TextStyle' key={alter.alterId}>
                {alter.alterName}
                <CheckBox
                  onClick={(e) =>
                    this.updateAlter(e.target.value, alter.alterId, index)
                  }
                  checked={alter.cohost}
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
