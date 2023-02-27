import React, { Component } from "react";
import "./style.scss";
import { Button, NavigationBar, Modal } from "../../Atoms";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import defaultAvatar from "../../Assests/images/a.png";

class SettingsPage extends Component {
  state = {
    alterModel: false,
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
          <div className="button_settings">
            {this.state.avatarIcon ? (
              <div className="avataorIcon">Icon</div>
            ) : (
              <div
                className="avataorIcon"
                onClick={() => this.setState({ alterModel: true })}
              >
                <img
                  id="defaultAvatar"
                  src={defaultAvatar}
                  alt="Default avatar"
                />
                <div>Change Profile</div>
              </div>
            )}
            <Button
              onClick={() => {
                this.props.history.push("");
                window.location.href = "";
              }}
              text={"Avatar Account"}
              endIcon={<ArrowForwardIosIcon />}
            ></Button>
            <Button
              onClick={() => ""}
              text={"Change Avatar Account"}
              endIcon={<ArrowForwardIosIcon />}
            ></Button>
            <Button
              onClick={() => ""}
              text={"Host and coHost Settings"}
              endIcon={<ArrowForwardIosIcon />}
            ></Button>
            <Button
              onClick={() => ""}
              text={"Therapists Permissions"}
              endIcon={<ArrowForwardIosIcon />}
            ></Button>
          </div>

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
