import React, { Component } from "react";
import TextBox from "../../Atoms/TextBox/TextBox";
import Button from "../../Atoms/Button/Button";

class Login extends Component {
  state = {
    name: "",
  };
  render() {
    return (
      <div>
        <div>login</div>
        <TextBox
          title={"Name"}
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <div>{this.state.name}</div>
        <Button onClick={() => alert(this.state.name)} text={"print"} />
      </div>
    );
  }
}

export default Login;
