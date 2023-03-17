import React from "react";
import "./style.scss";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const SwitchComp = (props) => {
  return (
    <div className='SwitchComp'>
      <FormControlLabel
        value='bottom'
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

export default SwitchComp;
