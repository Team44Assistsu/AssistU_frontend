import React, { Component } from "react";
import a from "../../Assests/images/a.png";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "../../redux/action/userAction";
import { NavigationBar, Card } from "../../Atoms";

class TherapistHomePage extends Component {
  componentDidMount() {
    console.log(this.props);
    const therapistId = localStorage.getItem("therapistId");
    this.props?.userActions.getPatients({ therapistId });
  }
  render() {
    const selections = [
      { id: 1, name: "Avatar1", email: "abc@gmail.com" },
      { id: 2, name: "Avatar2", email: "abc@gmail.com" },
      { id: 3, name: "Avatar3", email: "abc@gmail.com" },
      { id: 4, name: "Avatar4", email: "abc@gmail.com" },
      { id: 5, name: "Avatar5", email: "abc@gmail.com" },
      { id: 6, name: "Avatar6", email: "abc@gmail.com" },
    ];
    return (
      <>
        <NavigationBar isTherapistHomePage />
        <div className='TherapistHomePage'>
          {selections.map((item) => (
            <Card
              image={a}
              onClick={() => console.log("therapist home page")}
              key={item.id}
            >
              <div>{item.name}</div>
              <div>{item.email}</div>
            </Card>
          ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(TherapistHomePage);
