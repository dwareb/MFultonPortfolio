import React from 'react';
import '../styles/ThumbnailBar.css';

const ThumbnailBar = ({ images, index, update_index }) => {
  return images.map((img, i) => (
    <img
      key={i}
      className={(i === index ? 'selected ' : 'thumbnail')}
      src={process.env.PUBLIC_URL + img.src.slice(0, -4) + '_t.jpg'}
      alt={"Thumbnail"}
      onClick={() => update_index(i)}
    />
  ));
};

export default ThumbnailBar;
