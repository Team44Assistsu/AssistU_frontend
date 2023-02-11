import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import Avataricon from "../../Atoms/AvatarIcon/AvatarIcon";
import avatar1 from "../../Assests/images/af1.png";
import avatar2 from "../../Assests/images/af13.png";
import avatar3 from "../../Assests/images/am2.png";

const Landingpagepatient = () => {
  const navigate = useNavigate();
  return (
    <div className='LandingPage'>
      <Avataricon
        image={avatar1}
        onClick={() => navigate("/home", { replace: true })}
      />
      <Avataricon
        image={avatar2}
        onClick={() => navigate("/home", { replace: true })}
      />
      <Avataricon
        image={avatar3}
        onClick={() => navigate("/home", { replace: true })}
      />
    </div>
  );
};

export default Landingpagepatient;
