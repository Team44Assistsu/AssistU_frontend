import React, { Component } from "react";
import "./style.scss";
import { Button, NavigationBar } from "../../Atoms";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import avatar from "../../Assests/images/a.png";

class SettingsPage extends Component {
  render() {
    return (
      <>
        <NavigationBar isSetting />

        <div className="settingClass">
          <div className="button_settings">
            <img src={avatar} alt="avatar_icon" />
            <Button text={"Avatar"} />
            <Button
              onClick={() => {
                this.props.history.push("/landing-page");
                window.location.href = "/landing-page";
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
