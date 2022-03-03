import React, { useState } from 'react';
import '../styles/Card.css';
import Modal from './Modal';
import Slideshow from './Slideshow';

//Card element to be replicated many times.
//Content needs to be JSON. Can have the following data:
//Title "title", image array "images[]" (can be single image, but should be an array),
//The image array should be an object with two properties.
//The source "src" and the alt text "alt"
//Text Body "body", github link "link".

const Card = ({ children, content }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={'card-main'}>
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
          <Slideshow images={content.images}></Slideshow>
          <button
            className="close-button"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Close
          </button>
        </Modal>
      ) : (
        ''
      )}
      {children}
    </div>
  );
};

export default Card;
