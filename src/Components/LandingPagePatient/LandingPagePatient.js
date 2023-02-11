import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import Avataricon from "../../Atoms/AvatarIcon/AvatarIcon";
import avatar1 from "../../Assests/images/af1.png";
import avatar2 from "../../Assests/images/af13.png";
import avatar3 from "../../Assests/images/am2.png";
import Button from "../../Atoms/Button/Button";

const Landingpagepatient = () => {
  const navigate = useNavigate();
  return (
    <div className='LandingPage'>
      <div className='button_create'>
        <Button
          text={"Create Avatar"}
          primary
          onClick={() => alert("On progress")}
        />
      </div>
      <div className='alter_icon'>
        <Avataricon
          image={avatar1}
          onClick={() => navigate("/home", { replace: true })}
          name={"Avatar 1"}
        />
        <Avataricon
          image={avatar2}
          onClick={() => navigate("/home", { replace: true })}
          name={"Avatar 2"}
        />
        <Avataricon
          image={avatar3}
          onClick={() => navigate("/home", { replace: true })}
          name={"Avatar 3"}
        />
      </div>
    </div>
  );
};

export default Landingpagepatient;
