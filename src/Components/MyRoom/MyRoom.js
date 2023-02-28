import React, { Component } from "react";
import { NavigationBar } from "../../Atoms";

class CreateRoom extends Component {
  render() {
    return (
      <>
        <NavigationBar isRoom />
        <div>
          <div className='title'>My Room Space</div>
          <video
            src={
              "https://uwindsor.yuja.com/V/Video?v=822503&node=4038033&a=137783075&autoplay=1"
            }
            width='600'
            height='300'
            controls='controls'
            // autoplay='true'
          />
        </div>
      </>
    );
  }
}

export default CreateRoom;
