import React from "react";
import "./App.scss";
import Pagetitle from "./Atoms/PageTitle/PageTitle";
import RouterClass from "./Routes/routes";
import { ReactNotifications } from "react-notifications-component";

const App = (props) => {
  return (
    <React.Fragment>
      <Pagetitle />
      <ReactNotifications />
      <div className='App'>
        <RouterClass />
      </div>
    </React.Fragment>
  );
};

export default App;
