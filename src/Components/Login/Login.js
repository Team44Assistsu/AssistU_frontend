import React, { Component } from "react";
import { Button, TextBox, PageTitle, Modal } from "../../Atoms";
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
    errors: {},
    sendOtp: false,
  };
  componentDidMount() {
    localStorage.clear();
  }
  componentDidUpdate(prevProps) {
    const prev = prevProps?.UserReducer;
    const cur = this.props?.UserReducer;
    if (prev.login !== cur.login && cur?.login?.valid && cur?.isLoggedIn) {
      if (cur?.login?.therapistId) {
        localStorage.setItem("therapistId", cur?.login?.therapistId);
        this.props.history.push("/therapist-homepage");
        window.location.href = "/therapist-homepage";
      } else if (cur?.login?.patientId) {
        localStorage.setItem("patientId", cur?.login?.patientId);
        this.props.history.push("/landing-page");
        window.location.href = "/landing-page";
      }
    } else if (prev.login !== cur.login && cur.login && !cur.login.valid) {
      alert(cur?.login?.loginStatus || "Something went wrong");
    }
    if (prev.sendOtp !== cur.sendOtp && cur?.sendOtp && cur?.isSendOtp) {
      this.setState({ sendOtp: true });
    }
  }
  sendOtp = () => {
    const { userName } = this.state;
    let err = {};

    let regex = /^[a-zA-Z0-9.]+@+[a-zA-Z0-9]+.+[A-z]/;
    if (!regex.test(userName)) {
      err.userName = "Please enter valid emailId";
      this.setState({ errors: err });
    } else {
      this.setState({ errors: {} });
      this.props.userActions.sendOtp({ toEmail: userName });
    }
  };
  login = () => {
    const { userName, passWord } = this.state;

    if (userName && passWord) {
      this.setState({ errors: {} });
      this.props.userActions.login({ email: userName, password: passWord });
    } else if (passWord === null || passWord === "" || passWord === undefined) {
      alert("Enter password recieved in email");
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
              title={"Email"}
              value={this.state.userName}
              onChange={(e) => this.setState({ userName: e.target.value })}
              error={this.state.errors?.userName}
              helperText={this.state.errors?.userName}
            />
            <Button onClick={this.sendOtp} text={"Send OTP"} />
          </div>
        </div>
        {this.state.sendOtp && (
          <Modal
            open={this.state.sendOtp}
            handleClose={() =>
              this.setState({
                sendOtp: false,
              })
            }
            close
            className='sendOtpModal'
          >
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
              error={this.state.errors?.passWord}
              helperText={this.state.errors?.passWord}
            />
            <Button onClick={this.login} text={"login"} />
          </Modal>
        )}
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
