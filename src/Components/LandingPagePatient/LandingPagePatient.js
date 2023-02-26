import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { AvatarIcon, Button, PageTitle, Modal, TextBox } from "../../Atoms";
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
  const [pin, setPin] = useState(null);
  const [alter, setAlter] = useState({});
  const [error, setError] = useState("");
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
    if (validate()) {
      setPinModal(false);
      localStorage.setItem("alterId", alter?.alterId);
      localStorage.setItem("alterName", alter?.alterName);
      navigate("/home");
    }
  };

  const validate = () => {
    if (pin !== null && !pin.match(/^\d{4}$/)) {
      setError("Enter valid 4 digit pin");
      return false;
    }
    if (pin === null || pin === "" || pin === undefined) {
      setError("Please enter the pin");
      return false;
    }
    return true;
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
              onClick={() => {
                setPinModal(true);
                setAlter(avatar);
              }}
              name={avatar?.alterName}
            />
          ))}
        </div>
      </div>
      {pinModal && (
        <Modal
          open={pinModal}
          handleClose={() => setPinModal(false)}
          close
          className='pinModal'
        >
          <div className='Pin'>
            <div className='title'>Enter Pin</div>
            <TextBox
              required
              title={"Pin"}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              error={error}
              helperText={error}
            />
            <Button text={"Send"} primary onClick={login} />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Landingpagepatient;
