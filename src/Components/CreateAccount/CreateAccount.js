import React, { Component } from "react";
import "./style.scss";
import { PageTitle, Switch } from "../../Atoms";
import Patient from "./CreatePatientAccount";
import Therapist from "./CraeteTherapistAccount";
class CreateAccount extends Component {
  state = {
    isPatient: true,
  };
  onChangeSwitch = () => {
    this.setState({ isPatient: !this.state.isPatient });
  };
  render() {
    return (
      <>
        <PageTitle />
        {this.state.isPatient ? (
          <Patient
            checked={this.state.isPatient}
            onChangeSwitch={this.onChangeSwitch}
          />
        ) : (
          <Therapist
            checked={this.state.isPatient}
            onChangeSwitch={this.onChangeSwitch}
          />
        )}
      </>
    );
  }
}

export default CreateAccount;
