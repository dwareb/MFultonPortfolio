import React, { useRef, useState } from 'react';
import '../styles/Contact.css';
import Modal from './Modal';

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [modalMessage, setModalMessage] = useState('Empty');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    try {
      const response = await fetch('https://formspree.io/f/mleznbvl', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        setModalMessage(
          "Thanks for contacting me. I'm pretty good about getting to my email, so expect to hear from me soon."
        );
        setSendSuccess(true);
        setOpenModal(true);
        document.getElementById("contact-form").reset()
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, 'errors')) {
            setModalMessage(
              data['errors'].map((error) => error['message']).join(', ')
            );
            setSendSuccess(false);
            setOpenModal(true);
          } else {
            setModalMessage('There was an error sending the message.');
            setSendSuccess(false);
            setOpenModal(true);
          }
        });
      }
    } catch (error) {
      setModalMessage('Message send got no reply');
      setSendSuccess(false);
      setOpenModal(true);
    }
  };
  return (
    <form className="main-area form-body" id="contact-form" onSubmit={handleSubmit}>
      <h1 className="form-header">Contact Me</h1>
      <div className="form-field">
        <label htmlFor="name" className="input-label">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="text-field"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="userEmail" className="input-label">
          Your Email
        </label>
        <input
          id="userEmail"
          type="email"
          name="email"
          className="text-field"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="userMessage" className="input-label">
          Your Message
        </label>
        <textarea
          name="message"
          type="text"
          id="msg-body"
          className="text-field"
          cols="50"
          rows="6"
          required
        ></textarea>
      </div>
      <button className="form-submit">Send</button>
      {openModal ? (
        <div>
          <Modal setOpenModal={setOpenModal}></Modal>
          <div className="pop-up">
            <h1 className="pop-header">
              {sendSuccess ? 'Success' : 'Failure'}
            </h1>
            <p className="pop-message">{modalMessage}</p>
            <button className="pop-btn" onClick={() => setOpenModal(false)}>
              Close
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </form>
  );
};

export default Contact;
