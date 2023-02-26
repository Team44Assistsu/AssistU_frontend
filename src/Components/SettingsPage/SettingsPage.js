import React, { Component } from "react";
import "./style.scss";
import Button from "../../Atoms/Button/Button";
//import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import avatar from "../../Assests/images/a.png";

class SettingsPage extends Component {
  render() {
    // const navigate = useNavigate();
    return (
      <div className="settingClass">
        <div className="button_settings">
          <img src={avatar} alt="avatar_icon" />
          <Button text={"Avatar"} />
          <Button
            onClick={() => ""}
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
    );
  }
}

export default SettingsPage;
