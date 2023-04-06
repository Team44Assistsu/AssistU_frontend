import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, PageTitle } from "../../Atoms";
import "./style.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Alterhomepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageTitle />
      <div className='AlterPage'>
        <div className='title'>WELCOME</div>
        <div className='subtitle'>
          We Created This Virtual Space To Provide A Safe And Secure Environment
          For Alters To communicate
        </div>
        <div className='button_alignment'>
          <Button
            onClick={() => navigate("/my-room")}
            text={"My Room"}
            endIcon={<ArrowForwardIosIcon />}
          ></Button>
        </div>
        <div className='button_alignment'>
          <Button
            onClick={() => navigate("/settings")}
            text={"Settings"}
            endIcon={<ArrowForwardIosIcon />}
          ></Button>
          <Button
            onClick={() => navigate("/support")}
            text={"Support"}
            endIcon={<ArrowForwardIosIcon />}
          ></Button>
        </div>
      </div>
    </>
  );
};

export default Alterhomepage;
