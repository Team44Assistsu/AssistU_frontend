import React from "react";
import "./style.scss";
import avatar from "../../Assests/images/a.png";

const Avataricon = (props) => {
  return (
    <div className='AvatarIcon'>
      <img
        src={props.image ? props.image : avatar}
        alt='avatar_icon'
        onClick={props.onClick}
      />
    </div>
  );
};

export default Avataricon;
