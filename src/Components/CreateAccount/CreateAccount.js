import React, { Component } from "react";
import TextBox from "../../Atoms/TextBox/TextBox";
import Button from "../../Atoms/Button/Button";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "../../redux/action/userAction";

class CreateAccount extends Component {
  state = {
    patientName: "",
    age: "",
    gender: "",
    userName: "",
    password: "",
    emailID: "",
  };
  componentDidUpdate(prevProps) {
    const prev = prevProps?.UserReducer;
    const cur = this.props?.UserReducer;
    if (
      prev?.createPatient !== cur?.createPatient &&
      cur?.createPatient &&
      cur?.createPatient?.patientId
    ) {
      window.location.href = "/";
    }
  }
  createPatient = () => {
    const { patientName, userName, password, emailID, age, gender } =
      this.state;
    if (patientName && userName && password && emailID) {
      console.log(this.props);
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
        <TextBox
          title={"Gender"}
          value={this.state.gender}
          onChange={(e) => this.setState({ gender: e.target.value })}
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
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <TextBox
          title={"EmailId"}
          required
          value={this.state.emailID}
          onChange={(e) => this.setState({ emailID: e.target.value })}
        />
        <Button text={"Create"} onClick={this.createPatient} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
