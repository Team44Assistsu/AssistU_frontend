import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Atoms/Button/Button";
import "./style.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Alterhomepage = () => {
  const navigate = useNavigate();

  return (
    <div className='AlterPage'>
      <div className='title'>WELCOME TO ASSISTSU</div>
      <div className='subtitle'>
        We Created This Virtual Space To Provide A Safe And Secure Environment
        For Alters To communicate
      </div>
      <div className='button_alignment'>
        <Button
          onClick={() => navigate("/chat-room")}
          text={"Chat Room"}
          endIcon={<ArrowForwardIosIcon />}
        ></Button>
        <Button
          onClick={() => alert("On progress")}
          text={"My Room"}
          endIcon={<ArrowForwardIosIcon />}
        ></Button>
      </div>
      <div className='button_alignment'>
        <Button
          onClick={() => alert("On progress")}
          text={"Settings"}
          endIcon={<ArrowForwardIosIcon />}
        ></Button>
        <Button
          onClick={() => alert("On progress")}
          text={"Support"}
          endIcon={<ArrowForwardIosIcon />}
        ></Button>
      </div>
    </div>
  );
};

export default Alterhomepage;
