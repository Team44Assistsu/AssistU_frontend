import React from "react";
import Button from "@mui/material/Button";
import "./style.scss";

const ButtonComp = (props) => {
  return (
    <div className="btn-main">
      <Button
        variant={!props.primary ? "outlined" : "contained"}
        onClick={props.onClick}
        disabled={props.disabled}
        size={
          props.size === "sm"
            ? "small"
            : props.size === "md"
            ? "medium"
            : "large"
        }
        className={`Button ${props.classes}`}
      >
        {props.text}
      </Button>
    </div>
  );
};

export default ButtonComp;
