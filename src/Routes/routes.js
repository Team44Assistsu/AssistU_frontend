import React, { Component, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Login = lazy(() => import("../Components/Login/Login.js"));

class RouterClass extends Component {
  render() {
    return (
      <div className='main-content'>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        </Suspense>
      </div>
    );
  }
}

export default RouterClass;
