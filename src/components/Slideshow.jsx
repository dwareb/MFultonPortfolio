import React, { useEffect, useState } from 'react';
import '../styles/Slideshow.css';
import ThumbnailBar from './ThumbnailBar';

const Slideshow = ({ content }) => {
  const [img_index, setImageIndex] = useState(0);

  return (
    <div className="slide-show">
      <div className="slide-port">
        <img
          className="slide-image"
          src={process.env.PUBLIC_URL + content.images[img_index].src}
          alt={content.images[img_index].alt}
          title={content.images[img_index].alt}
        ></img>
      </div>
      <div className="thumbs-box">
        <div className="slide-thumbnails">
          <ThumbnailBar
            images={content.images}
            index={img_index}
            update_index={setImageIndex}
          ></ThumbnailBar>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
