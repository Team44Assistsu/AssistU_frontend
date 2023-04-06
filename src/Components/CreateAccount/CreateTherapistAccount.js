import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "../../redux/action/userAction";
import { Switch, TextBox, Button } from "../../Atoms";

class CreateTherapistAccount extends Component {
  state = {
    Name: "",
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
  //create a account with fields for therapist
  createTherapist = () => {
    const { Name, emailID, mobileNumber } = this.state;

    if (!this.validateTherapist()) {
      this.setState({ errors: {} });
      this.props?.userActions?.createTherapist({
        therapistName: Name,
        mobileNumber: mobileNumber,
        email: emailID,
      });
    }
  };
  //validation for the therapist fields
  validateTherapist = () => {
    let err = {};
    let regex = /^[a-zA-Z0-9.]+@+[a-zA-Z0-9]+.+[A-z]/;
    if (!regex.test(this.state.emailID)) {
      err.emailID = "Please enter valid emailId";
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
