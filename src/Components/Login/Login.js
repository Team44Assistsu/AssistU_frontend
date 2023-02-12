import React, { Component } from "react";
import TextBox from "../../Atoms/TextBox/TextBox";
import Button from "../../Atoms/Button/Button";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "../../redux/action/userAction";

class Login extends Component {
  state = {
    userName: "",
    passWord: "",
  };
  componentDidUpdate(prevProps) {
    const prev = prevProps?.UserReducer;
    const cur = this.props?.UserReducer;
    console.log(prev?.login, cur?.login);

    if (prev.login !== cur.login && cur?.login?.valid) {
      localStorage.setItem("patientId", cur?.login?.patientId);
      window.location.href = "/landing-page";
    } else if (prev.login !== cur.login && cur.login && !cur.login.valid) {
      alert(cur?.login?.loginStatus || "Something went wrong");
    }
  }
  login = () => {
    console.log("log");
    const { userName, passWord } = this.state;
    if (userName && passWord) {
      this.props.userActions.login({ username: userName, password: passWord });
    } else {
      alert("UserName or password missing");
    }
  };
  render() {
    console.log(this.props);
    return (
      <div className='LoginPage'>
        <div className='CreateAccount'>
          <Button
            primary
            onClick={() => (window.location.href = "/create-account")}
            text={"Create Account"}
          />
        </div>
        <div className='broder'>
          <TextBox
            required
            title={"UserName"}
            value={this.state.userName}
            onChange={(e) => this.setState({ userName: e.target.value })}
          />
          <TextBox
            required
            type='password'
            title={"password"}
            value={this.state.passWord}
            onChange={(e) => this.setState({ passWord: e.target.value })}
          />
          <div
            class='forgotPassword'
            onClick={() => (window.location.href = "/forgot-passsword")}
          >
            Forgot Password
          </div>
          <Button onClick={this.login} text={"Login"} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  UserReducer: state.UserReducer,
});

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
