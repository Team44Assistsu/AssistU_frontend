import React, { Component } from "react";
import Button from "../../Atoms/Button/Button";
import "./style.scss";
class AlterHomePage extends Component {
  render() {
    return (
      <div className="AlterPage">
        <h1>WELCOME TO ASSISTSU</h1>
        <h2>
          We Created This Virtual Space To Provide A Safe And Secure Environment
          For Alters To communicate
        </h2>
        <div className="button_alignment">
          <Button
            onClick={() => this.props.history.push("")}
            text={"Chat Room"}
          ></Button>
          <Button
            onClick={() => this.props.history.push("")}
            text={"Avatars"}
          ></Button>
        </div>
        <div className="button_alignment">
          <Button
            onClick={() => this.props.history.push("")}
            text={"Settings"}
          ></Button>
          <Button
            onClick={() => this.props.history.push("")}
            text={"Support"}
          ></Button>
        </div>
      </div>
    );
  }
}

export default AlterHomePage;
