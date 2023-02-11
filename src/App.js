import React from "react";
import "./App.scss";
import Pagetitle from "./Atoms/PageTitle/PageTitle";
import RouterClass from "./Routes/routes";

const App = (props) => {
  return (
    <React.Fragment>
      <Pagetitle />
      <div className='App'>
        <RouterClass />
      </div>
    </React.Fragment>
  );
};

export default App;
