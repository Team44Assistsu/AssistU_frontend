import React from "react"; // Importing React library
import Modal from "@mui/material/Modal"; // Importing Modal component from MUI library
import "./style.scss"; // Importing styles
import CloseIcon from "@mui/icons-material/Close"; // Importing CloseIcon component from MUI library

const ModalComp = (props) => {
  // Declaring a functional component named ModalComp with props as input
  return (
    <Modal
      open={props.open} // Setting open property to a boolean value received from parent component
      onClose={props.handleClose} // Setting onClose property to a function received from parent component
      aria-labelledby="modal-modal-title" // Setting aria-labelledby property
      aria-describedby="modal-modal-description" // Setting aria-describedby property
    >
      <div
        style={props.style} // Applying style received from parent component
        className={`model-content ${props.className}`} // Applying class name received from parent component
      >
        {props.close && ( // Checking if close property is true
          <div className="closeIcon" onClick={props.handleClose}>
            {" "}
            <CloseIcon />
          </div>
        )}
        {props.content || props.children}
      </div>
    </Modal>
  );
};
// export ModalComp component as default
export default ModalComp;
