import React from "react";
import Modal from "@mui/material/Modal";
import "./style.scss";
import CloseIcon from "@mui/icons-material/Close";

const ModalComp = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <div style={props.style} className='model-content'>
        {props.close && (
          <div className='closeIcon' onClick={props.handleClose}>
            <CloseIcon />
          </div>
        )}
        {props.content || props.children}
      </div>
    </Modal>
  );
};

export default ModalComp;
