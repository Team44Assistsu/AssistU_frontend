import React, { Component } from "react";
import TextBox from "../../Atoms/TextBox/TextBox";
import Button from "../../Atoms/Button/Button";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DropDown from "../../Atoms/DropDown/DropDown";
import * as avatarAction from "../../redux/action/avatarActions";

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
  };

  componentDidUpdate(prevProps) {
    const prev = prevProps?.AvatarReducer;
    const cur = this.props?.AvatarReducer;
    console.log(cur);

    if (prev?.createAvatar !== cur?.createAvatar && cur?.createAvatar) {
      this.props.history.push("landing-page");
      window.location.href = "/landing-page";
    }
  }

  createAvatar = () => {
    const { alterAge, alterGender, alterName, description } = this.state;
    const patientId = localStorage.getItem("patientId");
    if (alterName) {
      this.props?.avatarActions?.createAvatar({
        alterName: alterName,
        alterAge: alterAge,
        alterGender: alterGender,
        patientId: patientId,
        description: description,
      });
    }
  };

  render() {
    return (
      <div className='CreateAlter'>
        <TextBox
          required
          title={"Alter Name"}
          value={this.state.alterName}
          onChange={(e) => this.setState({ alterName: e.target.value })}
        />
        <TextBox
          type='number'
          title={"Alter Age"}
          value={this.state.alterAge}
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
        <Button text={"Create"} onClick={this.createAvatar} />
      </div>
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
