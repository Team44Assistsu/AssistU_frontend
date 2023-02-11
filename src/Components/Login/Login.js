import React, { Component } from "react";
import TextBox from "../../Atoms/TextBox/TextBox";
import Button from "../../Atoms/Button/Button";
import "./style.scss";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Login extends Component {
  state = {
    userName: "",
    passWord: "",
    forgetpassword: "",
  };
  render() {
    return (
      <div className="LoginPage">
        <div className="CreateAccount">
          <Button
            onClick={() => (window.location.href = "/create-account")}
            text={"Create Account"}
          />
        </div>
        <div className="broder">
          <TextBox
            title={"UserName"}
            value={this.state.userName}
            onChange={(e) => this.setState({ userName: e.target.value })}
          />
          <TextBox
            title={"password"}
            value={this.state.passWord}
            onChange={(e) => this.setState({ passWord: e.target.value })}
          />
          <div
            class="style"
            onClick={() => (window.location.href = "/forgot-passsword")}
          >
            Forgot Password
          </div>
          <Button
            onClick={() => (window.location.href = "/landing-page")}
            text={"Login"}
            // endIcon={<ArrowForwardIosIcon />}
          />
        </div>
      </div>
    );
  }
}

export default Login;
