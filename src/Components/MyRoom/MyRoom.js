import React, { Component } from "react";
import { NavigationBar } from "../../Atoms";

class CreateRoom extends Component {
  render() {
    return (
      <>
        <NavigationBar isRoom />
        <div>
          <h2>My Room Space</h2>
        </div>
      </>
    );
  }
}

export default CreateRoom;
