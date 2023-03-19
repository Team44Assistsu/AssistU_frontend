import React from "react";
import "./style.scss";
import CheckBox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
const checkBoxcomp = (props) => {
  return (
    <div className="checkbox-main">
      <FormControlLabel
        labelPlacement="start"
        label={props.label}
        control={<CheckBox checked={props.checked} onChange={props.onClick} />}
      />
    </div>
  );
};

export default checkBoxcomp;
