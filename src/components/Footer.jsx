import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h4 id="name-plate">© Michael Fulton</h4>
        <a href="https://github.com/dwareb/" id="github-link">
          <img
            src={process.env.PUBLIC_URL + '/images/github-mark-32px.png'}
            alt="Github Mark"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
