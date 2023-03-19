import React, { Component } from "react";
import "./style.scss";
import { Button, NavigationBar, Modal } from "../../Atoms";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import AvatarAccount from "./AvatarAccount";
import ChangePassword from "./ChangePassword";
import ChangeLoginPassword from "./ChangeLoginPassword";
import TherapistPermission from "./TherapistPermission";
import AvatarList from "../../avataricon";
import HostAndCohost from "./HostAndCohost";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as settingActions from "../../redux/action/settingActions";

class SettingsPage extends Component {
  state = {
    alterModel: false,
    avatarAccount: false,
    changepassword: false,
    therapistAccess: false,
    hostandcohost: false,
    changeLoginpassword: false,
    selectedIcon: 0,
  };
  componentDidMount() {
    console.log(this.props);
    const alterId = localStorage.getItem("alterId");
    const patientId = localStorage.getItem("patientId");
    this.props.settingActions.getAlterById({ alterId, patientId });
  }
  componentDidUpdate(prevProps) {
    const prev = prevProps?.SettingsReducer;
    const cur = this.props?.SettingsReducer;
    if (
      prev.settingGetAlter !== cur.settingGetAlter &&
      cur?.settingGetAlter &&
      cur?.isSettingGetAlter
    ) {
      this.setState({ selectedIcon: cur?.settingGetAlter?.profImgKey });
    }
    if (
      prev.settingProfile !== cur.settingProfile &&
      cur?.settingProfile &&
      cur?.isSettingProfile
    ) {
      this.setState({ alterModel: false });
    }
  }
  updateProfile = () => {
    const { selectedIcon } = this.state;
    let err = {};
    if (selectedIcon) {
      this.setState({ errors: {} });
      const alterId = localStorage.getItem("alterId");
      const isHost = localStorage.getItem("host");
      this.props.settingActions.updateAlterProfImg({
        profImgKey: selectedIcon ? selectedIcon : 0,
        alterId: Number(alterId),
        host: isHost === "true" ? true : false,
      });
    }
  };
  render() {
    const host = localStorage.getItem("host");
    return (
      <>
        <NavigationBar isSetting />
        <div className='settingClass'>
          <div className='avataorIcon'>
            <AddIcon
              className='addIcon'
              onClick={() => this.setState({ alterModel: true })}
            />

            <img
              id='defaultAvatar'
              src={
                this.state.selectedIcon
                  ? AvatarList[this.state.selectedIcon]
                  : AvatarList[0]
              }
              alt='selected avatar'
            />
          </div>
          <div className='button_settings'>
            <Button
              onClick={() => this.setState({ avatarAccount: true })}
              text={"Avatar Account"}
              endIcon={<ArrowForwardIosIcon />}
            ></Button>
            <Button
              onClick={() => this.setState({ changepassword: true })}
              text={"Change Avatar Pin"}
              endIcon={<ArrowForwardIosIcon />}
            ></Button>
            {host === "true" && (
              <Button
                onClick={() => this.setState({ changeLoginpassword: true })}
                text={"Change Login Password"}
                endIcon={<ArrowForwardIosIcon />}
              ></Button>
            )}
            {host === "true" && (
              <Button
                onClick={() => this.setState({ hostandcohost: true })}
                text={"Host and coHost Settings"}
                endIcon={<ArrowForwardIosIcon />}
              ></Button>
            )}
            {/* <Button
              onClick={() => this.setState({ therapistAccess: true })}
              text={"Therapists Permissions"}
              endIcon={<ArrowForwardIosIcon />}
            ></Button> */}
          </div>
          {this.state.avatarAccount && (
            <AvatarAccount
              {...this.props}
              close={() => this.setState({ avatarAccount: false })}
              open={this.state.avatarAccount}
            />
          )}
          {this.state.changepassword && (
            <ChangePassword
              {...this.props}
              close={() => this.setState({ changepassword: false })}
              open={this.state.changepassword}
            />
          )}
          {this.state.therapistAccess && (
            <TherapistPermission
              close={() => this.setState({ therapistAccess: false })}
              open={this.state.therapistAccess}
            />
          )}
          {this.state.changeLoginpassword && (
            <ChangeLoginPassword
              {...this.props}
              close={() => this.setState({ changeLoginpassword: false })}
              open={this.state.changeLoginpassword}
            />
          )}
          {this.state.hostandcohost && (
            <HostAndCohost
              {...this.props}
              close={() => this.setState({ hostandcohost: false })}
              open={this.state.hostandcohost}
            />
          )}
          {this.state.alterModel && (
            <Modal
              {...this.props}
              open={this.state.alterModel}
              handleClose={() =>
                this.setState({
                  alterModel: false,
                })
              }
              close
            >
              <div className='avatarList'>
                <div className='title'>Choose Avatar</div>
                <div className='avatarsDisplay'>
                  {Object.entries(AvatarList)?.map(([key, val]) => {
                    return (
                      <div
                        className={`iconList ${
                          this.state.selectedIcon == key && "selected"
                        }`}
                      >
                        <img
                          key={key}
                          src={val}
                          alt={`icon${key}`}
                          onClick={() => this.setState({ selectedIcon: key })}
                        />
                      </div>
                    );
                  })}
                </div>
                <Button
                  text={"Select"}
                  disabled={!this.state.selectedIcon}
                  onClick={this.updateProfile}
                  primary
                />
              </div>
            </Modal>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  SettingsReducer: state.SettingsReducer,
});

function mapDispatchToProps(dispatch) {
  return {
    settingActions: bindActionCreators(settingActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
