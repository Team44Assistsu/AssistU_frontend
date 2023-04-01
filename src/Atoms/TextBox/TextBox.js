import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "./style.scss";

class TextBox extends Component {
  render() {
    return (
      <TextField
        focused={this.props.focused ? this.props.focused : false}
        multiline={this.props.multiline}
        rows={this.props.rows}
        type={this.props.type}
        required={this.props.required}
        error={this.props.error}
        helperText={this.props.helperText}
        id='outlined-required'
        onChange={this.props.onChange}
        label={this.props.title}
        value={this.props.value}
        className={`textBox ${this.props.classes}`}
        InputProps={this.props.InputProps}
      />
    );
  }
}

export default TextBox;
