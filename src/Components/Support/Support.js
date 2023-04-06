import React, { Component } from "react";
import { NavigationBar } from "../../Atoms";
//class component for the support page
class Support extends Component {
  render() {
    return (
      <>
        <NavigationBar isSupport />
        <div>On progress </div>
      </>
    );
  }
}

export default Support;
