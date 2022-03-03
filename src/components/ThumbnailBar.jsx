//Thumbnail bar for use in the slideshow component.
//This requires thumbnail files be created for each image which will
//have the same name, except with an "_t.jpg" at the end of the file,
//rather than whatever extension it originally had. Eg the thumbnail
//for abc.png -> abc_t.jpg

import React from 'react';
import '../styles/ThumbnailBar.css';

const ThumbnailBar = ({ images, index, update_index }) => {
  return images.map((img, i) => (
    <img
      key={i}
      className={i === index ? 'selected ' : 'thumbnail'}
      src={process.env.PUBLIC_URL + img.src.slice(0, -4) + '_t.jpg'}
      alt={'Thumbnail'}
      onClick={() => update_index(i)}
    />
  ));
};

export default ThumbnailBar;
