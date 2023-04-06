// Import the necessary dependencies and styles for the AvatarIcon component
import React from "react";
import "./style.scss";
import avatar from "../../Assests/images/a.png";

//AvatarIcon component as a functional component that takes in props
const AvatarIcon = (props) => {
  return (
    // Return the JSX that makes up the AvatarIcon component
    <div className="AvatarIcon" onClick={props.onClick}>
      <div className="img-area">
        <img src={props.image ? props.image : avatar} alt="avatar_icon" />
      </div>
      {props.name && <div className="name-area">{props.name}</div>}
    </div>
  );
};
// Export the AvatarIcon component for use in other parts of the application
export default AvatarIcon;
