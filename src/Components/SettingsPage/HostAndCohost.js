import React, { Component } from "react";
import { Modal, CheckBox, Button } from "../../Atoms";

class HostAndCohost extends Component {
  state = {
    Host: false,
    CoHost: false,
  };

  render() {
    const Alters = [
      { id: 1, Alter: "Avatar1" },
      { id: 2, Alter: "Avatar2" },
      { id: 3, Alter: "Avatar3" },
      { id: 4, Alter: "Avatar4" },
      { id: 5, Alter: "Avatar5" },
      { id: 6, Alter: "Avatar6" },
    ];
    return (
      <Modal
        className="ModelHostAndCohost"
        open={this.props.open}
        handleClose={this.props.close}
        close
      >
        <div className="title">Co-Host Permissions Access </div>
        <div className="Co-HostStyle">
          <div>
            {Alters.map((item) => (
              <div className="TextStyle" key={item.id}>
                {item.Alter}
                <CheckBox
                  onClick={(e) => this.setState({ Host: e.target.value })}
                  value={this.state.Host}
                />
              </div>
            ))}
          </div>

          <Button onClick={() => ""} text={"Submit"} />
        </div>
      </Modal>
    );
  }
}

export default HostAndCohost;
