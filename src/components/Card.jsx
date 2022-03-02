import React, { useState } from 'react';
import '../styles/Card.css';
import Modal from './Modal';
import Slideshow from './Slideshow';

const Card = ({ children, extra_style = '', content }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={'card-main ' + extra_style}>
      {content.title ? <h1 className="card-title">{content.title}</h1> : ''}
      {content.images ? (
        <img
          className="card-image"
          src={process.env.PUBLIC_URL + content.images[0].src}
          alt={content.images[0].alt}
          title={content.title}
          onClick={() => {
            setOpenModal(true);
          }}
        />
      ) : (
        ''
      )}
      {content.body ? <p className="card-body">{content.body}</p> : ''}
      {content.link ? (
        <a className="card-link" href={content.link}>
          GitHub Link
        </a>
      ) : (
        ''
      )}
      {openModal ? (
        <Modal setOpenModal={setOpenModal}>
          <Slideshow content={content}></Slideshow>
          <button className='close-button' onClick={()=>{setOpenModal(false)}}>Close</button>
        </Modal>
      ) : (
        ''
      )}
      {children}
    </div>
  );
};

export default Card;
