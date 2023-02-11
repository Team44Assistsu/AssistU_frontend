import React from "react";
import Modal from "@mui/material/Modal";
import "./style.scss";

const ModalComp = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <div style={props.style} className='model-content'>
        {props.content || props.children}
      </div>
    </Modal>
  );
};

export default ModalComp;
