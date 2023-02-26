import React, { Component } from "react";
import "./style.scss";
import { Button, NavigationBar } from "../../Atoms";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import avatar from "../../Assests/images/a.png";

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
            <img src={avatar} alt="avatar_icon" />
            <Button
              text={"Avatar"}
              onClick={() => this.setState({ alterModel: true })}
            />
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
        </div>
      </>
    );
  }
}

export default SettingsPage;
