import React, { Component, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const ForgotPassword = lazy(() =>
  import("../Components/ForgotPassword/ForgotPassword.js")
);
const Login = lazy(() => import("../Components/Login/Login.js"));
const LandingPagePatient = lazy(() =>
  import("../Components/LandingPagePatient/LandingPagePatient")
);

class RouterClass extends Component {
  render() {
    return (
      <div className='main-content'>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route
              exact
              path='/landing-page'
              element={<LandingPagePatient />}
            />
            <Route exact path='/forgot-password' element={<ForgotPassword />} />
          </Routes>
        </Suspense>
      </div>
    );
  }
}

export default RouterClass;
