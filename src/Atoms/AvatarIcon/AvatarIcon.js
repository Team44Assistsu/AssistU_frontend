import React from "react";
import "./style.scss";
import avatar from "../../Assests/images/a.png";

const AvatarIcon = (props) => {
  return (
    <div className='AvatarIcon' onClick={props.onClick}>
      <div className='img-area'>
        <img src={props.image ? props.image : avatar} alt='avatar_icon' />
      </div>
      {props.name && <div className='name-area'>{props.name}</div>}
    </div>
  );
};

export default AvatarIcon;
