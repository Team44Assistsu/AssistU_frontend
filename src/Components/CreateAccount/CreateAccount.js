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
    mobileNo: "",
    options: [
      { value: "Female", option: "Female" },
      { value: "Male", option: "Male" },
    ],
    errors: {},
    showPassword: false,
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
    const {
      patientName,
      userName,
      password,
      emailID,
      age,
      gender,
      mobileNumber,
    } = this.state;
    console.log(this.validateEmail());
    if (!this.validateEmail()) {
      console.log("inside create patient");
      this.setState({ errors: {} });
      this.props?.userActions?.createPatient({
        patientName: patientName,
        patientAge: age,
        gender: gender,
        description: null,
        userName: userName,
        password: password,
        email: emailID,
        mobileNumber: mobileNumber,
      });
    }
  };

  validateEmail = () => {
    console.log("enter into validation funtion");
    let err = {};
    let regex = /^[a-zA-Z0-9!#$%^&*()\-__+.]+@+[a-zA-Z]+.+[a-z]/;
    console.log(regex.test(this.state.emailID));
    if (!regex.test(this.state.emailID)) {
      err.emailID = "Please enter valid emailId";
    }
    let regexpassword =
      /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/;
    if (!regexpassword.test(this.state.password)) {
      err.password =
        "Password should contain atleast one special character,one captial,small alphabets and numeric";
    } else if (this.state.password !== this.state.repassword) {
      err.repassword = "Please enter same password as above";
    }
    let reguserName = /^([A-za-z0-9]{4,})$/;
    if (!reguserName.test(this.state.userName)) {
      err.userName = "user Name should contain alphanumeric characters";
    }
    let regMobileNo = /^(\+[0-9]{11})$/;
    if (!regMobileNo.test(this.state.mobileNumber)) {
      err.mobileNumber =
        "Please enter Mobile Number with country code and should be 10 digits";
    }
    if (this.state.age <= 0) {
      err.patientAge = "Age should be greater than 0";
    }
    let regpatientName = /^([A-za-z]{1,})$/;
    if (!regpatientName.test(this.state.patientName)) {
      err.patientName = "user Name should contain alpha characters";
    }

    this.setState({
      errors: err,
    });
    return Object.keys(err).length > 0;
  };

  render() {
    return (
      <>
        <PageTitle />
        <div className="CreateDetails">
          <div className="formArea">
            <TextBox
              title={"Patient Name"}
              required
              value={this.state.patientName}
              onChange={(e) => this.setState({ patientName: e.target.value })}
              error={this.state.errors?.patientName}
              helperText={this.state.errors?.patientName}
            />
            <TextBox
              title={"Age"}
              type={"number"}
              value={this.state.age}
              onChange={(e) => this.setState({ age: e.target.value })}
              error={this.state.errors?.patientAge}
              helperText={this.state.errors?.patientAge}
            />
            <DropDown
              onChange={(e) => this.setState({ gender: e.target.value })}
              label="Gender"
              value={this.state.gender}
              options={this.state.options}
            />
            <TextBox
              title={"User Name"}
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
              title={"Re-enter Password"}
              required
              type={this.state.showPassword ? "text" : "password"}
              value={this.state.repassword}
              onChange={(e) => this.setState({ repassword: e.target.value })}
              error={this.state.errors?.repassword}
              helperText={this.state.errors?.repassword}
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
            />
            <TextBox
              title={"EmailId"}
              required
              value={this.state.emailID}
              onChange={(e) => this.setState({ emailID: e.target.value })}
              error={this.state.errors?.emailID}
              helperText={this.state.errors?.emailID}
            />
            <TextBox
              title={"Mobile Number"}
              required
              value={this.state.mobileNumber}
              onChange={(e) => this.setState({ mobileNumber: e.target.value })}
              error={this.state.errors?.mobileNumber}
              helperText={this.state.errors?.mobileNumber}
            />
          </div>
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
