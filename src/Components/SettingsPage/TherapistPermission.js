import { CheckBoxOutlineBlankTwoTone } from "@mui/icons-material";
import React, { Component } from "react";
import { Modal, Button, CheckBox } from "../../Atoms";

class TherapistPermission extends Component {
  state = {
    profilechecked: false,
    Messagingchecked: false,
    MyRoomchecked: false,
  };
  render() {
    return (
      <Modal
        className='ModelTherapist'
        open={this.props.open}
        handleClose={this.props.close}
        close
      >
        <div className='title'> Therapist Access </div>
        <div className='TherapistPermission'>
          <div className='TextStyle'>
            <div>profile View</div>
            <CheckBoxOutlineBlankTwoTone
              onClick={(e) => this.setState({ checked: e.target.value })}
              value={this.state.checked}
            />
          </div>
          <div className='TextStyle'>
            <div>Messaging View</div>
            <CheckBox
              onClick={(e) =>
                this.setState({ Messagingchecked: e.target.value })
              }
              value={this.state.Messagingchecked}
            />
          </div>
          <div className='TextStyle'>
            <div>My Room Permissions</div>
            <CheckBox
              onClick={(e) => this.setState({ MyRoomchecked: e.target.value })}
              value={this.state.MyRoomchecked}
            />
          </div>
          <Button onClick={() => ""} text={"Submit"} />
        </div>
      </Modal>
    );
  }
}

export default TherapistPermission;
