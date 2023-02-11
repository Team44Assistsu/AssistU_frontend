import React, { Component } from "react";
import TextBox from "../../Atoms/TextBox/TextBox";
import Button from "../../Atoms/Button/Button";
import "./style.scss";

class CreateAlter extends Component {
  state = {
    alterName: "",
    alterAge: "",
    alterGender: "",
    description: "",
  };
  render() {
    return (
      <div className="CreateAlter">
        <TextBox
          title={"Alter Name"}
          value={this.state.alterName}
          onChange={(e) => this.setState({ alterName: e.target.value })}
        />
        <TextBox
          title={"Alter Age"}
          value={this.state.alterAge}
          onChange={(e) => this.setState({ alterAge: e.target.value })}
        />
        <TextBox
          title={"Alter Gender"}
          value={this.state.alterGender}
          onChange={(e) => this.setState({ alterGender: e.target.value })}
        />
        <TextBox
          title={"Something About You"}
          value={this.state.description}
          onChange={(e) => this.setState({ description: e.target.value })}
        />
        <Button text={"Create"} />
      </div>
    );
  }
}

export default CreateAlter;
