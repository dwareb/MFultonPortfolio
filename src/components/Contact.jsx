import React from 'react';

const Contact = () => {
  return <div>
  <video width="320" height="240" controls>
    <source src={process.env.PUBLIC_URL + "/images/dungeon.mp4"} type="video/mp4"/>
  </video>
  </div>;
};

export default Contact;
