import React from "react";
import "./App.scss";
import RouterClass from "./Routes/routes";

const App = (props) => {
  return (
    <React.Fragment>
      <div className='App'>
        <RouterClass />
      </div>
    </React.Fragment>
  );
};

export default App;
