import React, { Component, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AlterHomePage from "../Components/AlterHomePage/AlterHomePage.js";
import { createBrowserHistory } from "history";

const ForgotPassword = lazy(() =>
  import("../Components/ForgotPassword/ForgotPassword.js")
);
const Login = lazy(() => import("../Components/Login/Login.js"));
const LandingPagePatient = lazy(() =>
  import("../Components/LandingPagePatient/LandingPagePatient")
);
const ChatRoom = lazy(() => import("../Components/ChatRoom/ChatRoom.js"));

class RouterClass extends Component {
  render() {
    const history = createBrowserHistory();

    return (
      <div className='main-content'>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route
              exact
              path='/home'
              element={<AlterHomePage history={history} />}
            />
            <Route
              path='/landing-page'
              element={<LandingPagePatient history={history} />}
            />
            <Route
              path='/forgot-password'
              element={<ForgotPassword history={history} />}
            />
            <Route path='/chat-room' element={<ChatRoom history={history} />} />
            <Route exact path='/' element={<Login history={history} />} />
          </Routes>
        </Suspense>
      </div>
    );
  }
}

export default RouterClass;
