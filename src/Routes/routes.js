import React, { Component, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AlterHomePage from "../Components/AlterHomePage/AlterHomePage.js";
const ForgotPassword = lazy(() =>
  import("../Components/ForgotPassword/ForgotPassword.js")
);
const Login = lazy(() => import("../Components/Login/Login.js"));

class RouterClass extends Component {
  render() {
    return (
      <div className="main-content">
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
            <Route exact path="/home" element={<AlterHomePage />} />
          </Routes>
        </Suspense>
      </div>
    );
  }
}

export default RouterClass;
