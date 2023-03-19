import React, { Component } from "react";
import a from "../../Assests/images/a.png";
import "./style.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "../../redux/action/userAction";
import { PageTitle, Card } from "../../Atoms";
import AvatarList from "../../avataricon";
class TherapistHomePage extends Component {
  state = {
    patients: [],
  };
  componentDidMount() {
    const therapistId = localStorage.getItem("therapistId");
    this.props?.userActions.getPatients({ therapistId });
  }
  componentDidUpdate(prevProps) {
    const prev = prevProps?.UserReducer;
    const cur = this.props?.UserReducer;
    if (
      prev?.getPatients !== cur?.getPatients &&
      cur?.getPatients &&
      cur?.getPatients?.patients &&
      cur?.isPatientList
    ) {
      this.setState({ patients: cur?.getPatients?.patients });
    }
  }
  render() {
    return (
      <>
        <PageTitle />
        <div className='TherapistHomePage'>
          {this.state.patients?.map((item) => (
            <Card
              image={AvatarList[item.profImgKey ? item.profImgKey : 0]}
              onClick={() => console.log("therapist home page")}
              key={item.patientId}
            >
              <div>
                <span>Name: </span>
                {item.patientName}
              </div>
              <div>
                <span>Email: </span>
                {item.email}
              </div>
              <div>
                <span>Phone: </span>
                {item.mobileNo}
              </div>
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
