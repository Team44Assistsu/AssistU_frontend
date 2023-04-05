import React from "react";
import "./style.scss";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

/*functional component for the switch it recives several inputs props checked
/ handleChange,disabled,label,labelPlacement*/
const SwitchComp = (props) => {
  return (
    <div className="SwitchComp">
      <FormControlLabel
        value="bottom"
        control={<Switch inputProps={{ "aria-label": "controlled" }} />}
        checked={props.checked}
        onChange={props.handleChange}
        disabled={props.disabled}
        label={props.label}
        labelPlacement={props.labelPlacement ? props.labelPlacement : "end"}
      />
    </div>
  );
};
//export the component in the application
export default SwitchComp;
