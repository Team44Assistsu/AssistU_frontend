import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, PageTitle } from "../../Atoms";
import "./style.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Alterhomepage = () => {
  // useNavigate is a hook provided by react-router-dom that allows us to navigate to different pages within our app
  const navigate = useNavigate();

  return (
    // a component that renders the page title
    <>
      <PageTitle />
      <div className="AlterPage">
        <div className="title">WELCOME</div>
        <div className="subtitle">
          We Created This Virtual Space To Provide A Safe And Secure Environment
          For Alters To communicate
        </div>
        <div className="button_alignment">
          <Button
            onClick={() => navigate("/my-room")} // navigate to the "/my-room" page when this button is clicked
            text={"My Room"}
            endIcon={<ArrowForwardIosIcon />}
          ></Button>
        </div>
        <div className="button_alignment">
          <Button
            onClick={() => navigate("/settings")} // navigate to the "/settings" page when this button is clicked
            text={"Settings"}
            endIcon={<ArrowForwardIosIcon />}
          ></Button>
          <Button
            onClick={() => navigate("/support")} // navigate to the "/support" page when this button is clicked
            text={"Support"}
            endIcon={<ArrowForwardIosIcon />}
          ></Button>
        </div>
      </div>
    </>
  );
};

export default Alterhomepage;
