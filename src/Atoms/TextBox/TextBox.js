import React, { Component } from "react";
import TextField from "@mui/material/TextField";

class TextBox extends Component {
  render() {
    return (
      <TextField
        required={this.props.required}
        error={this.props.error}
        helperText={this.props.helperText}
        id='outlined-required'
        onChange={this.props.onChange}
        label={this.props.title}
        value={this.props.value}
      />
    );
  }
}

export default TextBox;
