import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  DropDown,
  TextBox,
  Button,
  PageTitle,
  Notification,
  Modal,
} from "../../Atoms";
import * as avatarAction from "../../redux/action/avatarActions";
import defaultAvatar from "../../Assests/images/a.png";
import AddIcon from "@mui/icons-material/Add";

class CreateAlter extends Component {
  state = {
    alterName: "",
    alterAge: "",
    alterGender: "",
    description: "",
    options: [
      { value: "Female", option: "Female" },
      { value: "Male", option: "Male" },
    ],
    error: {},
    notify: {},
    alterModel: false,
    selectedIcon: null,
    pin: null,
    reenterPin: null,
  };

  componentDidUpdate(prevProps) {
    const prev = prevProps?.AvatarReducer;
    const cur = this.props?.AvatarReducer;
    console.log(cur);

    if (prev?.createAvatar !== cur?.createAvatar && cur?.createAvatar) {
      this.setState({
        notify: { message: "Avatar created successfully", type: "success" },
      });
      this.props.history.push("landing-page");
      window.location.href = "/landing-page";
    }
  }

  createAvatar = () => {
    const { alterAge, alterGender, alterName, description, pin, error } =
      this.state;
    const patientId = localStorage.getItem("patientId");
    if (this.isValidate() && patientId) {
      this.props?.avatarActions?.createAvatar({
        alterName: alterName,
        alterAge: alterAge,
        alterGender: alterGender,
        patientId: patientId,
        description: description,
      });
    } else {
      this.setState({
        notify: { message: "Something went wrong!!", type: "error" },
      });
    }
  };

  isValidate = () => {
    let validate = true;
    const { alterAge, alterName, pin, reenterPin } = this.state;
    const err = {};
    if (alterAge !== "" && alterAge <= 0) {
      err.age = "Invalid age";
    }
    if (alterName === "" || alterName === null || alterName === undefined) {
      err.name = "Please enter name";
    }
    if (pin !== null && !pin.match(/^\d{4}$/)) {
      err.pin = "Please enter valid 4 digit pin";
    }
    if (reenterPin !== null && pin !== reenterPin) {
      err.reenterPin = "Pin don't match";
    }
    if (pin === null || pin === "") {
      err.pin = "Please enter 4 digit pin";
    }
    if ((reenterPin === null || reenterPin === "") && pin !== null) {
      err.reenterPin = "Please confirm 4 digit pin";
    }
    if (Object.keys(err).length > 0) {
      validate = false;
    }
    this.setState({ error: err });
    return validate;
  };

  render() {
    const avatars = [
      { id: 1, image: defaultAvatar },
      { id: 2, image: defaultAvatar },
      { id: 3, image: defaultAvatar },
    ];
    return (
      <>
        <Notification notify={this.state.notify} />
        <PageTitle />
        <div className='CreateAlter'>
          <div
            className='avataorIcon'
            // onClick={() => this.setState({ alterModel: true })}
          >
            <AddIcon
              className='addIcon'
              onClick={() => this.setState({ alterModel: true })}
            />
            {this.state.avatarIcon ? (
              <div className='avataorIcon'>Icon</div>
            ) : (
              <>
                <img
                  id='defaultAvatar'
                  src={defaultAvatar}
                  alt='Default avatar'
                />
                <div>Change Profile</div>
              </>
            )}
          </div>
          <div className='formArea'>
            <TextBox
              required
              title={"Alter Name"}
              value={this.state.alterName}
              onChange={(e) => this.setState({ alterName: e.target.value })}
              error={this.state.error?.name}
              helperText={this.state.error?.name}
            />
            <TextBox
              type='number'
              title={"Alter Age"}
              value={this.state.alterAge}
              error={this.state.error?.age}
              helperText={this.state.error?.age}
              onChange={(e) => this.setState({ alterAge: e.target.value })}
            />
            <DropDown
              onChange={(e) => this.setState({ alterGender: e.target.value })}
              label='Gender'
              value={this.state.alterGender}
              options={this.state.options}
            />
            <TextBox
              title={"Something About You"}
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
            <TextBox
              title={"Create Pin"}
              value={this.state.pin}
              onChange={(e) => this.setState({ pin: e.target.value })}
              error={this.state.error?.pin}
              helperText={
                this.state.error?.pin ? this.state.error?.pin : "Example: 1234"
              }
            />
            <TextBox
              title={"Re-enter Pin"}
              value={this.state.reenterPin}
              onChange={(e) => this.setState({ reenterPin: e.target.value })}
              error={this.state.error?.reenterPin}
              helperText={this.state.error?.reenterPin}
            />
          </div>
          <Button text={"Create"} onClick={this.createAvatar} />
        </div>
        {this.state.alterModel && (
          <Modal
            open={this.state.alterModel}
            handleClose={() =>
              this.setState({
                alterModel: false,
              })
            }
            close
          >
            <div className='avatarList'>
              <div className='title'>Choose Avatar</div>
              <div className='avatarsDisplay'>
                {avatars?.map((icon, index) => {
                  return (
                    <div
                      className={`iconList ${
                        this.state.selectedIcon == icon.id && "selected"
                      }`}
                    >
                      <img
                        key={icon.id}
                        src={icon.image}
                        alt={`icon${index}`}
                        onClick={() => this.setState({ selectedIcon: icon.id })}
                      />
                    </div>
                  );
                })}
              </div>
              <Button
                text={"Select"}
                disabled={!this.state.selectedIcon}
                onClick={() => this.setState({ alterModel: false })}
                primary
              />
            </div>
          </Modal>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  AvatarReducer: state.AvatarReducer,
});

function mapDispatchToProps(dispatch) {
  return {
    avatarActions: bindActionCreators(avatarAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAlter);
