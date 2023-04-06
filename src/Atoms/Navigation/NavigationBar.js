import React from "react";
import "./style.scss";
import { Button } from "..";
import { useNavigate } from "react-router-dom";
// NavigationBar component
const NavigationBar = (props) => {
  // Get the navigate function from react-router-dom to navigate to different routes
  const navigate = useNavigate();
  return (
    // NavigationBar container
    <div className="NavigationBar">
      <div className="Title">Assists-U</div>
      <div className="Navs">
        /* Navigation links */
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
      <div className="button-collection">
        {localStorage.getItem("patientId") && (
          <Button //Collection of buttons
            text={"LogOut"}
            onClick={() => {
              localStorage.clear();
              navigate("/", { replace: true });
            }}
          />
        )}

        {localStorage.getItem(
          "alterId"
        ) /* Landing page button for alternate users*/ && (
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
