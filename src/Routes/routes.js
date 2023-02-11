import React, { Component, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AlterHomePage from "../Components/AlterHomePage/AlterHomePage.js";
import CreateAccount from "../Components/CreateAccount/CreateAccount.js";
// import history from "./History";
import { createBrowserHistory } from "history";
const ForgotPassword = lazy(() =>
  import("../Components/ForgotPassword/ForgotPassword.js")
);
const Login = lazy(() => import("../Components/Login/Login.js"));
const LandingPagePatient = lazy(() =>
  import("../Components/LandingPagePatient/LandingPagePatient")
);

class RouterClass extends Component {
  render() {
    const history = createBrowserHistory();

    return (
      <div className="main-content">
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route
              exact
              path="/home"
              element={<AlterHomePage history={history} />}
            />
            <Route
              path="/landing-page"
              element={<LandingPagePatient history={history} />}
            />
            <Route
              path="/forgot-password"
              element={<ForgotPassword history={history} />}
            />
            <Route
              path="/create-account"
              element={<CreateAccount history={history} />}
            />
            <Route exact path="/" element={<Login history={history} />} />
          </Routes>
        </Suspense>
      </div>
    );
  }
}

export default RouterClass;
