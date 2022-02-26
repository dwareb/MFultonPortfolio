import React from 'react';
import '../styles/Global.css';
import '../styles/Portrait.css';

const Portrait = ({ picture, alt_text, title_text, size }) => {
  return (
    <div className="main-container">
      <div className="outer-container">
        <div className="inner-ring">
          <div className="inner-container">
            <div className='gear-center' style={{width:size,height:size}}/>
          </div>
        </div>
      </div>
      <img
        className="port-img"
        src={picture}
        alt={alt_text}
        title={title_text}
        height={size}
        width={size}
      />
    </div>
  );
};

export default Portrait;
