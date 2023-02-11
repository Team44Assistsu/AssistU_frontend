import React, { Component } from "react";
import TextBox from "../../Atoms/TextBox/TextBox";
import Button from "../../Atoms/Button/Button";
import "./style.scss";
class CreateAccount extends Component {
  state = {
    patientName: "",
    age: "",
    gender: "",
    userName: "",
    password: "",
    emailID: "",
  };
  render() {
    return (
      <div className="CreateDetails">
        <TextBox
          title={"Patient Name"}
          value={this.state.patientName}
          onChange={(e) => this.setState({ patientName: e.target.value })}
        />
        <TextBox
          title={"Age"}
          value={this.state.age}
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <TextBox
          title={"Gender"}
          value={this.state.gender}
          onChange={(e) => this.setState({ gender: e.target.value })}
        />
        <TextBox
          title={"User Name"}
          value={this.state.userName}
          onChange={(e) => this.setState({ userName: e.target.value })}
        />
        <TextBox
          title={"Password"}
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <TextBox
          title={"EmailId"}
          value={this.state.emailID}
          onChange={(e) => this.setState({ emailID: e.target.value })}
        />
        <Button text={"Create"} />
      </div>
    );
  }
}

export default CreateAccount;
