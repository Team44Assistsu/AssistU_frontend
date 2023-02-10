import React, { Component } from "react";
import "./style.scss";
import Avataricon from "../../Atoms/AvatarIcon/AvatarIcon";
import avatar1 from "../../Assests/images/af1.png";
import avatar2 from "../../Assests/images/af13.png";
import avatar3 from "../../Assests/images/am2.png";

class Landingpagepatient extends Component {
  render() {
    return (
      <div className='LandingPage'>
        <Avataricon image={avatar1} />
        <Avataricon image={avatar2} />
        <Avataricon image={avatar3} />
      </div>
    );
  }
}

export default Landingpagepatient;
