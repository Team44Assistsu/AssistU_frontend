/*

This is the Loader component which displays a spinner animation while content is being loaded.
It is a class component.
*/
import React, { Component } from "react";
import "./style.scss";

class Loader extends Component {
  render() {
    return (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }
}

export default Loader;
