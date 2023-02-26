import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { AvatarIcon, Button, PageTitle, Modal } from "../../Atoms";
import avatar0 from "../../Assests/images/af1.png";
import avatar1 from "../../Assests/images/af13.png";
import avatar2 from "../../Assests/images/am2.png";
import { useDispatch, useSelector } from "react-redux";
import * as avatarActions from "../../redux/action/avatarActions";

const Landingpagepatient = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [avatarsList, setAvatarList] = useState([]);
  const [pinModal, setPinModal] = useState(false);
  const result = useSelector((state) => state.AvatarReducer);

  useEffect(() => {
    const patientId = localStorage.getItem("patientId");
    dispatch(avatarActions.getAvatar({ patientId }));
  }, []);
  console.log(props.history.location);

  useEffect(() => {
    setAvatarList(result?.getAvatar);
  }, [result?.getAvatar]);

  const login = () => {
    // localStorage.setItem("alterId", avatar?.alterId);
    // localStorage.setItem("alterName", avatar?.alterName);
    navigate("/home");
  };
  return (
    <>
      <PageTitle />
      <div className='LandingPage'>
        <div className='button_create'>
          <Button
            text={"Create Avatar"}
            primary
            onClick={() => navigate("/create-alter")}
          />
        </div>
        <div className='alter_icon'>
          {avatarsList?.map((avatar, index) => (
            <AvatarIcon
              key={index}
              image={
                index % 3 === 0 ? avatar0 : index % 3 === 1 ? avatar1 : avatar2
              }
              onClick={() => setPinModal(true)}
              name={avatar?.alterName}
            />
          ))}
        </div>
      </div>
      {pinModal && (
        <Modal
          open={this.state.alterModel}
          handleClose={() => setPinModal(false)}
          close
        ></Modal>
      )}
    </>
  );
};

export default Landingpagepatient;
