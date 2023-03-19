import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { AvatarIcon, Button, PageTitle, Modal, TextBox } from "../../Atoms";
import { useDispatch, useSelector } from "react-redux";
import * as avatarActions from "../../redux/action/avatarActions";
import AvatarList from "../../avataricon";

const Landingpagepatient = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [avatarsList, setAvatarList] = useState([]);
  const [pinModal, setPinModal] = useState(false);
  const [pin, setPin] = useState("");
  const [alter, setAlter] = useState({});
  const [error, setError] = useState("");
  const result = useSelector((state) => state.AvatarReducer);

  useEffect(() => {
    const patientId = localStorage.getItem("patientId");
    dispatch(avatarActions.getAvatar({ patientId }));
  }, []);

  useEffect(() => {
    setAvatarList(result?.getAvatar);
  }, [result?.getAvatar]);

  const login = () => {
    if (validate()) {
      dispatch(avatarActions.checkPin({ alterId: alter?.alterId, pin: pin }));
    }
  };

  useEffect(() => {
    localStorage.removeItem("alterId");
    if (
      result?.isPin &&
      result?.checkPin?.valid &&
      !localStorage.getItem("alterId")
    ) {
      setPinModal(false);
      result["isPin"] = false;
      localStorage.setItem("alterId", alter?.alterId);
      localStorage.setItem("alterName", alter?.alterName);
      localStorage.setItem("host", alter?.host);
      navigate("/home");
    }
  }, [result?.checkPin]);

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
      <div className="LandingPage">
        <div className="button_create">
          <Button
            text={"Create Avatar"}
            primary
            onClick={() => navigate("/create-alter")}
          />
        </div>
        <div className="alter_icon">
          {avatarsList?.map((avatar, index) => (
            <AvatarIcon
              key={index}
              image={AvatarList[avatar?.profImgKey ? avatar?.profImgKey : 0]}
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
          className="pinModal"
        >
          <div className="Pin">
            <div className="title">Enter Pin</div>
            <TextBox
              required
              title={"Pin"}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              error={error ? true : false}
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
