import React, { Component } from "react";
import TextBox from "../../Atoms/TextBox/TextBox";
import Button from "../../Atoms/Button/Button";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "../../redux/action/userAction";
import { store } from "react-notifications-component";

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
      window.location.href = "/landing-page";
    }
    if (prev.login !== cur.login && !cur?.login?.valid) {
      store.addNotification({
        title: "Error!!",
        message: cur?.login?.loginStatus || "Something went wrong",
        type: "danger",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 10000,
        },
      });
      // alert(cur?.login?.loginStatus || "Something went wrong");
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
