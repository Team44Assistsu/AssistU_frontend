import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "../../redux/action/userAction";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { DropDown, Button, TextBox, Switch } from "../../Atoms";
import Alter from "../CreateAlter/CreateAlter";
//create class component for the patient account
class CreatePatientAccount extends Component {
  state = {
    patientName: "",
    age: "",
    gender: "",
    emailID: "",
    mobileNo: "",
    options: [
      { value: "Female", option: "Female" },
      { value: "Male", option: "Male" },
    ],
    errors: {},
    showPassword: false,
    isAlter: false,
    patientId: null,
  };

  componentDidUpdate(prevProps) {
    const prev = prevProps?.UserReducer;
    const cur = this.props?.UserReducer;
    if (
      prev?.createPatient !== cur?.createPatient &&
      cur?.createPatient &&
      cur?.createPatient?.patientId
    ) {
      //   this.props?.history?.push("/");
      //   window.location.href = "/";
      this.setState({
        isAlter: true,
        patientId: cur?.createPatient?.patientId,
      });
    }
  }

  navigateToLogin = () => {
    this.props?.history?.push("/");
    window.location.href = "/";
  };

  createPatient = () => {
    const { patientName, emailID, age, gender, mobileNumber } = this.state;

    if (!this.validatePatient()) {
      this.setState({ errors: {} });
      this.props?.userActions?.createPatient({
        patientName: patientName,
        patientAge: age,
        gender: gender,
        description: null,
        email: emailID,
        mobileNumber: mobileNumber,
      });
    }
  };
  //validation for the fields
  validatePatient = () => {
    let err = {};
    let regex = /^[a-zA-Z0-9.]+@+[a-zA-Z0-9]+.+[A-z]/;
    if (!regex.test(this.state.emailID)) {
      err.emailID = "Please enter valid emailId";
    }
    let regMobileNo = /^(\+[0-9]{11})$/;
    if (!regMobileNo.test(this.state.mobileNumber)) {
      err.mobileNumber = "Mobile Number should be 10 digits";
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
  //function to display the fields in UI
  render() {
    return (
      <>
        {this.state.isAlter ? (
          <Alter
            isPatient
            data={{
              name: this.state.patientName,
              age: this.state.age,
              gender: this.state.gender,
              patientId: this.state.patientId,
            }}
            navigateToLogin={this.navigateToLogin}
          />
        ) : (
          <>
            <Switch
              label={"Patient"}
              checked={this.props?.checked}
              handleChange={() => this.props?.onChangeSwitch()}
            />
            <div className="CreateDetailsPatient">
              <div className="formArea">
                <TextBox
                  title={"Patient Name"}
                  required
                  value={this.state.patientName}
                  onChange={(e) =>
                    this.setState({ patientName: e.target.value })
                  }
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
                  onChange={(e) =>
                    this.setState({ mobileNumber: e.target.value })
                  }
                  error={this.state.errors?.mobileNumber}
                  helperText={this.state.errors?.mobileNumber}
                />
              </div>
              <Button text={"Create"} onClick={this.createPatient} />
            </div>
          </>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePatientAccount);
