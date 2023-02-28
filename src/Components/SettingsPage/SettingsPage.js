import React, { Component } from "react";
import "./style.scss";
import { Button, NavigationBar, Modal } from "../../Atoms";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import defaultAvatar from "../../Assests/images/a.png";
import AddIcon from "@mui/icons-material/Add";
import AvatarAccount from "./AvatarAccount";
import ChangePassword from "./ChangePassword";
import TherapistPermission from "./TherapistPermission";

class SettingsPage extends Component {
  state = {
    alterModel: false,
    avatarAccount: false,
    changepassword: false,
    therapistAccess: false,
  };
  render() {
    const avatars = [
      { id: 1, image: defaultAvatar },
      { id: 2, image: defaultAvatar },
      { id: 3, image: defaultAvatar },
    ];
    return (
      <>
        <NavigationBar isSetting />
        <div className="settingClass">
          {this.state.avatarIcon ? (
            <div className="avataorIcon">Icon</div>
          ) : (
            <div className="avataorIcon">
              <AddIcon
                className="addIcon"
                onClick={() => this.setState({ alterModel: true })}
              />
              <img
                id="defaultAvatar"
                src={defaultAvatar}
                alt="Default avatar"
              />
            </div>
          )}
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
              onClick={() => ""}
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
                  {avatars?.map((icon, index) => {
                    return (
                      <div
                        className={`iconList ${
                          this.state.selectedIcon == icon.id && "selected"
                        }`}
                      >
                        <img
                          key={icon.id}
                          src={icon.image}
                          alt={`icon${index}`}
                          onClick={() =>
                            this.setState({ selectedIcon: icon.id })
                          }
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
