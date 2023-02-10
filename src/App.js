import React from "react";
import "./App.scss";
import RouterClass from "./Routes/routes";

function App() {
  return (
    <React.Fragment>
      <div className='App'>
        <RouterClass />
      </div>
    </React.Fragment>
  );
}

export default App;
