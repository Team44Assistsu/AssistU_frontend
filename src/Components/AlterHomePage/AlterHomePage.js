import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, PageTitle } from "../../Atoms";
import "./style.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Alterhomepage = () => {
  // useNavigate is a hook provided by react-router-dom that allows us to navigate to different pages within our app
  const navigate = useNavigate();

  return (
    <>
      <PageTitle /> // a component that renders the page title
      <div className="AlterPage">
        <div className="title">WELCOME</div> // a title for the page
        <div className="subtitle">
          We Created This Virtual Space To Provide A Safe And Secure Environment
          For Alters To communicate
        </div>{" "}
        // a subtitle that provides some context for the page
        <div className="button_alignment">
          <Button
            onClick={() => navigate("/chat-room")} // navigate to the "/chat-room" page when this button is clicked
            text={"Chat Room"} // the text to display on the button
            endIcon={<ArrowForwardIosIcon />} // an icon to display at the end of the button text
          ></Button>
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
