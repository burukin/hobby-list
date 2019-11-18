import React from "react";
import "./Modal.scss";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show
    ? "Modal Modal--display-block"
    : "Modal Modal--display-none";

  return (
    <div className={showHideClassName}>
      <section className='Modal__main'>
        {children}
        <button onClick={handleClose} className='btn btn--close'>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
