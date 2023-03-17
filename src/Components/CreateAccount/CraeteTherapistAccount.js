import React, { Component } from "react";
import "./style.scss";
import { Switch } from "../../Atoms";

class CraeteTherapistAccount extends Component {
  render() {
    return (
      <>
        <Switch
          label={"Patient"}
          checked={this.props?.checked}
          handleChange={() => this.props?.onChangeSwitch()}
        />
        <div className='CreateTherapistAccount'></div>
      </>
    );
  }
}

export default CraeteTherapistAccount;
