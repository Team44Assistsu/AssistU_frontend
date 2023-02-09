import React from "react";
import "./App.css";
// import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
import RouterClass from "./Routes/routes";
// import Login from './Components/Login/Login'

function App() {
  return (
    <React.Fragment>
      <div>
        <RouterClass history={this.props.history} />
      </div>
    </React.Fragment>
  );
}

export default App;
