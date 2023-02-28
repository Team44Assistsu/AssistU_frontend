import React, { Component } from "react";
import { NavigationBar } from "../../Atoms";

class CreateRoom extends Component {
  render() {
    return (
      <>
        <NavigationBar isRoom />
        <div>
          <div className='title'>My Room Space</div>
          {/* <video
            src={"../../Assests/videos/demo.mp4"}
            width='600'
            height='300'
            controls='controls'
            autoplay='true'
          /> */}
          {/* <Video width='320' height='240' controls>
            <source src={"../../Assests/videos/demo.mp4"} />
          </Video> */}
        </div>
      </>
    );
  }
}

export default CreateRoom;
