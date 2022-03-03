//Basic modal. Requires function passed in that controls its being open,
//so clicking off the content closes the modal.

import React from 'react';
import '../styles/Modal.css';

const Modal = ({ setOpenModal, children }) => {
  return (
    <div className={'modal-pop'}>
      {children}
      <div
        className="modal-background"
        onClick={() => {
          setOpenModal(false);
        }}
      />
    </div>
  );
};

export default Modal;
