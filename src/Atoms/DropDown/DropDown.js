import React from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import "./style.scss";
import FormControl from "@mui/material/FormControl";

const DropDown = (props) => {
  return (
    <>
      <FormControl className='dropdown'>
        <InputLabel id='dropdown-label'>{props.label}</InputLabel>
        <Select
          required={props.required}
          labelId='dropdown-label'
          id='dropdown-main'
          className='dropdown-select'
          value={props.value}
          label={props.label}
          onChange={props.onChange}
        >
          {props?.options?.map((item) => (
            <MenuItem value={item.value}>{item.option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default DropDown;
