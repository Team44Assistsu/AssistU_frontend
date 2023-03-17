import React, { Component } from "react";
import "./style.scss";
import { Button, NavigationBar, Modal } from "../../Atoms";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import defaultAvatar from "../../Assests/images/a.png";
import AddIcon from "@mui/icons-material/Add";
import AvatarAccount from "./AvatarAccount";
import ChangePassword from "./ChangePassword";
import TherapistPermission from "./TherapistPermission";
import AvatarList from "../../avataricon";
import HostAndCohost from "./HostAndCohost";

class SettingsPage extends Component {
  state = {
    alterModel: false,
    avatarAccount: false,
    changepassword: false,
    therapistAccess: false,
    hostandcohost: false,
  };
  render() {
    return (
      <>
        <NavigationBar isSetting />
        <div className="settingClass">
          <div className="avataorIcon">
            <AddIcon
              className="addIcon"
              onClick={() => this.setState({ alterModel: true })}
            />
            {this.state.selectedIcon ? (
              <img
                id="defaultAvatar"
                src={AvatarList[this.state.selectedIcon]}
                alt="selected avatar"
              />
            ) : (
              <img
                id="defaultAvatar"
                src={defaultAvatar}
                alt="Default avatar"
              />
            )}
          </div>
          <div className="button_settings">
            <Button
              onClick={() => this.setState({ avatarAccount: true })}
              text={"Avatar Account"}
              endIcon={<ArrowForwardIosIcon />}
            ></Button>
            <Button
              onClick={() => this.setState({ changepassword: true })}
              text={"Change Avatar Password"}
              endIcon={<ArrowForwardIosIcon />}
            ></Button>
            <Button
              onClick={() => this.setState({ hostandcohost: true })}
              text={"Host and coHost Settings"}
              endIcon={<ArrowForwardIosIcon />}
            ></Button>
            <Button
              onClick={() => this.setState({ therapistAccess: true })}
              text={"Therapists Permissions"}
              endIcon={<ArrowForwardIosIcon />}
            ></Button>
          </div>
          {this.state.avatarAccount && (
            <AvatarAccount
              close={() => this.setState({ avatarAccount: false })}
              open={this.state.avatarAccount}
            />
          )}
          {this.state.changepassword && (
            <ChangePassword
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
          {this.state.hostandcohost && (
            <HostAndCohost
              close={() => this.setState({ hostandcohost: false })}
              open={this.state.hostandcohost}
            />
          )}
          {this.state.alterModel && (
            <Modal
              open={this.state.alterModel}
              handleClose={() =>
                this.setState({
                  alterModel: false,
                })
              }
              close
            >
              <div className="avatarList">
                <div className="title">Choose Avatar</div>
                <div className="avatarsDisplay">
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
                  onClick={() => this.setState({ alterModel: false })}
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

export default SettingsPage;
