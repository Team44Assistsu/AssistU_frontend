import React from "react";
import "./style.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Pagetitle = () => {
  const navigate = useNavigate();
  return (
    <div className='PageTitle'>
      <div className='pageName'>Assists-U</div>
      <div className='button-collection'>
        {(localStorage.getItem("patientId") ||
          localStorage.getItem("therapistId")) && (
          <Button
            text='LogOut'
            onClick={() => {
              localStorage.clear();
              navigate("/", { replace: true });
            }}
          />
        )}
        {localStorage.getItem("alterId") && (
          <Button
            text='Landing Page'
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

export default Pagetitle;
