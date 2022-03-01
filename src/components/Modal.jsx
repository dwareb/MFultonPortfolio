import React from 'react'
import '../styles/Modal.css'

const Modal = ({setOpenModal, children}) => {
  return (
    <div className={'modal-pop'} onClick={() => {setOpenModal(false)}}>{children}</div>
  )
}

export default Modal