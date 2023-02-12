import React from "react";
import "./style.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Pagetitle = () => {
  const navigate = useNavigate();
  return (
    <div className='PageTitle'>
      <div className='pageName'>Assists-U</div>
      {localStorage.getItem("patientId") && (
        <Button
          primary
          text='Logout'
          onClick={() => {
            localStorage.clear();
            navigate("/", { replace: true });
          }}
        />
      )}
    </div>
  );
};

export default Pagetitle;
