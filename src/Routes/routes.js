import React, { Component, lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const Login = lazy(() => import("../Components/Login/Login.js"));

class RouterClass extends Component {
  render() {
    return (
      // <div className='main-content'>
      //   <Suspense fallback={<div className='container spinner'></div>}>
      //   <Routes>
      //     {/* <Route exact path='/login' component={Login} /> */}
      //     <Route path='/' element={Login} />

      //     {/* <Route path="/*" component={NotFound} /> */}
      //   </Routes>
      //   </Suspense>
      // </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={Login} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default RouterClass;
