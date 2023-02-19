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
