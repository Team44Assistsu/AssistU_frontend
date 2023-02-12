import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import Avataricon from "../../Atoms/AvatarIcon/AvatarIcon";
import avatar0 from "../../Assests/images/af1.png";
import avatar1 from "../../Assests/images/af13.png";
import avatar2 from "../../Assests/images/am2.png";
import Button from "../../Atoms/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import * as avatarActions from "../../redux/action/avatarActions";

const Landingpagepatient = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [avatarsList, setAvatarList] = useState([]);
  const result = useSelector((state) => state.AvatarReducer);

  useEffect(() => {
    const patientId = localStorage.getItem("patientId");
    dispatch(avatarActions.getAvatar({ patientId }));
  }, []);

  useEffect(() => {
    console.log(result?.getAvatar);

    setAvatarList(result?.getAvatar);
  }, [result?.getAvatar]);
  return (
    <div className='LandingPage'>
      <div className='button_create'>
        <Button
          text={"Create Avatar"}
          primary
          onClick={() => alert("On progress")}
        />
      </div>
      <div className='alter_icon'>
        {avatarsList?.map((avatar, index) => (
          <Avataricon
            image={
              index % 3 === 0 ? avatar0 : index % 3 === 1 ? avatar1 : avatar2
            }
            onClick={() => {
              localStorage.setItem("alterId", avatar?.alterId);
              navigate("/home", { state: { avatar }, replace: true });
            }}
            name={avatar?.alterName}
          />
        ))}
      </div>
    </div>
  );
};

export default Landingpagepatient;
