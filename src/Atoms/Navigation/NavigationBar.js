import React from "react";
import "./style.scss";
import { Button } from "..";
import { useNavigate } from "react-router-dom";

const NavigationBar = (props) => {
  const navigate = useNavigate();
  return (
    <div className='NavigationBar'>
      <div className='Title'>Assists-U</div>
      <div className='Navs'>
        <div onClick={() => navigate("/home")}>Home</div>
        {!props.isRoom && (
          <div onClick={() => navigate("/my-room")}>My Room</div>
        )}
        {!props.isSetting && (
          <div onClick={() => navigate("/settings")}>Setting</div>
        )}
        {!props.isSupport && (
          <div onClick={() => navigate("/support")}>Support</div>
        )}
        {!props.isTherapistHomePage && localStorage.getItem("therapistId") && (
          <div onClick={() => navigate("/therapist-homepage")}>
            therapist home
          </div>
        )}
      </div>
      <div className='button-collection'>
        {localStorage.getItem("patientId") && (
          <Button
            text={"LogOut"}
            onClick={() => {
              localStorage.clear();
              navigate("/", { replace: true });
            }}
          />
        )}
        {localStorage.getItem("alterId") && (
          <Button
            text={"Landing Page"}
            onClick={() => {
              localStorage.removeItem("alterId");
              localStorage.removeItem("alterName");
              localStorage.removeItem("host");
              navigate("/landing-page", { replace: true });
            }}
          />
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
