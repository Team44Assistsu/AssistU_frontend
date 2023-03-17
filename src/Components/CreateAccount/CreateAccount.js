import React, { Component } from "react";
import "./style.scss";
import { PageTitle } from "../../Atoms";
import Patient from "./CreatePatientAccount";
import Therapist from "./CraeteTherapistAccount";
class CreateAccount extends Component {
  state = {
    isPatient: true,
  };
  render() {
    return (
      <>
        <PageTitle />
        {this.state.isPatient ? <Patient /> : <Therapist />}
      </>
    );
  }
}

export default CreateAccount;
