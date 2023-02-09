import React from "react";
import Button from "@mui/material/Button";

const ButtonComp = (props) => {
  return (
    <Button
      variant={!props.primary ? "contained" : "outlined"}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

export default ButtonComp;
