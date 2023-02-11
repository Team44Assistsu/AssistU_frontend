import React, { Component } from "react";
import Button from "../../Atoms/Button/Button";
import "./style.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
            endIcon={<ArrowForwardIosIcon />}
          ></Button>
          <Button
            onClick={() => this.props.history.push("")}
            text={"My Room"}
            endIcon={<ArrowForwardIosIcon />}
          ></Button>
        </div>
        <div className="button_alignment">
          <Button
            onClick={() => this.props.history.push("")}
            text={"Settings"}
            endIcon={<ArrowForwardIosIcon />}
          ></Button>
          <Button
            onClick={() => this.props.history.push("")}
            text={"Support"}
            endIcon={<ArrowForwardIosIcon />}
          ></Button>
        </div>
      </div>
    );
  }
}

export default AlterHomePage;
