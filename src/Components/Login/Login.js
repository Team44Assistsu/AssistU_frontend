import React, { Component } from "react";
import { Button, TextBox, PageTitle } from "../../Atoms";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "../../redux/action/userAction";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

class Login extends Component {
  state = {
    userName: "",
    passWord: "",
    showPassword: false,
  };
  componentDidMount() {
    localStorage.clear();
    console.log(this.props?.history?.location);
  }
  componentDidUpdate(prevProps) {
    const prev = prevProps?.UserReducer;
    const cur = this.props?.UserReducer;
    if (prev.login !== cur.login && cur?.login?.valid) {
      localStorage.setItem("patientId", cur?.login?.patientId);
      this.props.history.push("/landing-page");
      window.location.href = "/landing-page";
    } else if (prev.login !== cur.login && cur.login && !cur.login.valid) {
      alert(cur?.login?.loginStatus || "Something went wrong");
    }
  }
  login = () => {
    const { userName, passWord } = this.state;
    if (userName && passWord) {
      this.props.userActions.login({ username: userName, password: passWord });
    } else {
      alert("UserName or password missing");
    }
  };
  render() {
    return (
      <>
        <PageTitle />
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
              type={this.state.showPassword ? "text" : "password"}
              title={"password"}
              value={this.state.passWord}
              onChange={(e) => this.setState({ passWord: e.target.value })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() =>
                        this.setState({
                          showPassword: !this.state.showPassword,
                        })
                      }
                      style={{ marginTop: "0px" }}
                      edge='start'
                    >
                      {this.state.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
      </>
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
