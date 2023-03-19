import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "../../redux/action/userAction";
import { Switch, TextBox, Button } from "../../Atoms";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AvatarList from "../../avataricon";

class CreateTherapistAccount extends Component {
  state = {
    Name: "",
    userName: "",
    password: "",
    repassword: "",
    emailID: "",
    phoneNumber: "",
    errors: {},
    showPassword: false,
    therapistId: null,
  };

  componentDidUpdate(prevProps) {
    const prev = prevProps?.UserReducer;
    const cur = this.props?.UserReducer;
    if (
      prev?.createTherapist !== cur?.createTherapist &&
      cur?.createTherapist
    ) {
      this.props?.history?.push("/");
      window.location.href = "/";
    }
  }
  createTherapist = () => {
    const { Name, userName, password, emailID, mobileNumber } = this.state;

    if (!this.validateTherapist()) {
      this.setState({ errors: {} });
      this.props?.userActions?.createTherapist({
        therapistName: Name,
        mobileNumber: mobileNumber,
        email: emailID,
        userName: userName,
        password: password,
      });
    }
  };

  validateTherapist = () => {
    let err = {};
    let regex = /^[a-zA-Z0-9.]+@+[a-zA-Z0-9]+.+[A-z]/;
    if (!regex.test(this.state.emailID)) {
      err.emailID = "Please enter valid emailId";
    }
    let regexpassword =
      /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/;
    if (!regexpassword.test(this.state.password)) {
      err.password = "Is Not Strong Password";
    } else if (this.state.password !== this.state.repassword) {
      err.repassword = "Please enter same password as above";
    }
    let reguserName = /^([A-za-z0-9]{4,})$/;
    if (!reguserName.test(this.state.userName)) {
      err.userName = "user Name should contain alphanumeric characters";
    }
    let regMobileNo = /^(\+[0-9]{11})$/;
    if (!regMobileNo.test(this.state.phoneNumber)) {
      err.mobileNumber = "Mobile Number should be 10 digits";
    }
    let regName = /^([A-za-z]{1,})$/;
    if (!regName.test(this.state.Name)) {
      err.Name = "user Name should contain alpha characters";
    }

    this.setState({
      errors: err,
    });
    return Object.keys(err).length > 0;
  };
  render() {
    return (
      <>
        <Switch
          label={"Therapist"}
          checked={this.props?.checked}
          handleChange={() => this.props?.onChangeSwitch()}
        />
        <div className="CreateTherapistAccount">
          <div className="formArea">
            <TextBox
              title={"Name"}
              required
              value={this.state.Name}
              onChange={(e) => this.setState({ Name: e.target.value })}
              error={this.state.errors?.Name}
              helperText={this.state.errors?.Name}
            />
            <TextBox
              title={"Email Id"}
              required
              value={this.state.emailID}
              onChange={(e) => this.setState({ emailID: e.target.value })}
              error={this.state.errors?.emailID}
              helperText={this.state.errors?.emailID}
            />
            <TextBox
              title={"UserName"}
              required
              value={this.state.userName}
              onChange={(e) => this.setState({ userName: e.target.value })}
              error={this.state.errors?.userName}
              helperText={this.state.errors?.userName}
            />
            <TextBox
              title={"Password"}
              required
              type={this.state.showPassword ? "text" : "password"}
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        this.setState({
                          showPassword: !this.state.showPassword,
                        })
                      }
                      style={{ marginTop: "0px" }}
                      edge="start"
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
              error={this.state.errors?.password}
              helperText={this.state.errors?.password}
            />
            <TextBox
              title={"Confirm Password"}
              required
              value={this.state.repassword}
              onChange={(e) => this.setState({ repassword: e.target.value })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        this.setState({
                          showPassword: !this.state.showPassword,
                        })
                      }
                      style={{ marginTop: "0px" }}
                      edge="start"
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
              error={this.state.errors?.repassword}
              helperText={this.state.errors?.repassword}
            />
            <TextBox
              title={"Phone Number"}
              required
              value={this.state.phoneNumber}
              onChange={(e) => this.setState({ phoneNumber: e.target.value })}
              error={this.state.errors?.mobileNumber}
              helperText={this.state.errors?.mobileNumber}
            />
          </div>
          <Button text={"Create"} onClick={this.createTherapist} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTherapistAccount);
