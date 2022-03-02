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
    <button className='close-button' onClick={()=>{setOpenModal(false)}}>Close</button>
    </div>
  );
};

export default Modal;
