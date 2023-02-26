import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "../../redux/action/userAction";
import { DropDown, Button, TextBox, PageTitle } from "../../Atoms";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

class CreateAccount extends Component {
  state = {
    patientName: "",
    age: "",
    gender: "",
    userName: "",
    password: "",
    repassword: "",
    emailID: "",
    options: [
      { value: "Female", option: "Female" },
      { value: "Male", option: "Male" },
    ],
  };

  componentDidMount() {
    console.log(this.props);
  }

  componentDidUpdate(prevProps) {
    const prev = prevProps?.UserReducer;
    const cur = this.props?.UserReducer;
    if (
      prev?.createPatient !== cur?.createPatient &&
      cur?.createPatient &&
      cur?.createPatient?.patientId
    ) {
      this.props?.history?.push("/");
      window.location.href = "/";
    }
  }

  createPatient = () => {
    const { patientName, userName, password, emailID, age, gender } =
      this.state;
    if (patientName && userName && password && emailID) {
      this.props?.userActions?.createPatient({
        patientName: patientName,
        patientAge: age,
        gender: gender,
        description: null,
        userName: userName,
        password: password,
        email: emailID,
        mobileNo: null,
      });
    }
  };

  render() {
    return (
      <>
        <PageTitle />
        <div className='CreateDetails'>
          <TextBox
            title={"Patient Name"}
            required
            value={this.state.patientName}
            onChange={(e) => this.setState({ patientName: e.target.value })}
          />
          <TextBox
            title={"Age"}
            type={"number"}
            value={this.state.age}
            onChange={(e) => this.setState({ age: e.target.value })}
          />
          <DropDown
            onChange={(e) => this.setState({ gender: e.target.value })}
            label='Gender'
            value={this.state.gender}
            options={this.state.options}
          />
          <TextBox
            title={"User Name"}
            required
            value={this.state.userName}
            onChange={(e) => this.setState({ userName: e.target.value })}
          />
          <TextBox
            title={"Password"}
            required
            type={this.state.showPassword ? "text" : "password"}
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
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
          <TextBox
            title={"Re-enter Password"}
            required
            type={this.state.showPassword ? "text" : "password"}
            value={this.state.repassword}
            onChange={(e) => this.setState({ repassword: e.target.value })}
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
          <TextBox
            title={"EmailId"}
            required
            value={this.state.emailID}
            onChange={(e) => this.setState({ emailID: e.target.value })}
          />
          <Button text={"Create"} onClick={this.createPatient} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
