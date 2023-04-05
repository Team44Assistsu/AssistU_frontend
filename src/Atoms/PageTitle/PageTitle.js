// Importing necessary dependencies
import React from "react";
import "./style.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
// Functional component for page title section
const Pagetitle = () => {
  const navigate = useNavigate(); // Initializing useNavigate hook
  return (
    <div className="PageTitle">
      <div className="pageName">Assists-U</div>
      <div className="button-collection">
        {(localStorage.getItem("patientId") ||
          localStorage.getItem("therapistId")) && (
          <Button
            text="LogOut"
            onClick={() => {
              localStorage.clear();
              navigate("/", { replace: true });
            }}
          />
        )}
        {localStorage.getItem("alterId") && (
          <Button //Conditional rendering for Landing Page button
            text="Landing Page"
            onClick={() => {
              localStorage.removeItem("alterId"); // Removing item from local storage
              localStorage.removeItem("alterName");
              localStorage.removeItem("host");
              navigate("/landing-page", { replace: true }); // Navigating to landing page
            }}
          />
        )}
      </div>
    </div>
  );
};
// export the component
export default Pagetitle;
