import React from "react";
import "./style.scss";
import avatar from "../../Assests/images/a.png";

const ChatAvatar = (props) => {
  return (
    <div className='ChatAvatar' onClick={props.onClick}>
      <img src={props.image ? props.image : avatar} alt='avatar_icon' />
      {props.customMessage ? (
        <div className='CustomMessage'>
          <div className='name'>{props.name || "buddy"}</div>
          <div className='message'>{props.customMessage}</div>
        </div>
      ) : (
        <div className='message-area'>
          {props.customMessage
            ? `${props.name}- ${props.customMessage}`
            : `Hey! Message from ${props.name || "buddy"}`}
        </div>
      )}
    </div>
  );
};

export default ChatAvatar;
