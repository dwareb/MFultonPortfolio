//This component takes an array of images which are objects that include
//a "src" and "alt" property. They are then displayed in a slideshow, with a
//thumbnail preview for selecting the image.

import React, { useState } from 'react';
import '../styles/Slideshow.css';
import ThumbnailBar from './ThumbnailBar';

const Slideshow = ({ images }) => {
  const [img_index, setImageIndex] = useState(0);

  return (
    <div className="slide-show">
      <div className="slide-port">
        <img
          className="slide-image"
          src={process.env.PUBLIC_URL + images[img_index].src}
          alt={images[img_index].alt}
          title={images[img_index].alt}
        ></img>
      </div>
      <div className="thumbs-box">
        <div className="slide-thumbnails">
          <ThumbnailBar
            images={images}
            index={img_index}
            update_index={setImageIndex}
          ></ThumbnailBar>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
