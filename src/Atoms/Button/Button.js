// Import dependencies and styles for the ButtonComp component
import React from "react";
import Button from "@mui/material/Button";
import "./style.scss";

//ButtonComp component as a functional component that takes in props
const ButtonComp = (props) => {
  // Return the JSX that makes up the ButtonComp component
  return (
    //Create a Material-UI Button component with props passed in from the parent component
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
        //classes passed in from the parent component to the Button component
        className={`Button ${props.classes}`}
        //Set the endIcon and startIcon of the button based on props passed in from the parent component, or null if they are not specified
        endIcon={props?.endIcon || null}
        startIcon={props?.startIcon || null}
      >
        {props.text}
      </Button>
    </div>
  );
};
// Export the ButtonComp component for use in other parts of the application
export default ButtonComp;
