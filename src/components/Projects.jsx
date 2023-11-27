//This is the page display for things I've made, or projects that
//I've completed. Display is via a series of cards, whose content is
//defined in the card_data.js file.

import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../styles/Projects.css';
import card_data from './card_data.js';

const Projects = () => {
  return (
    <div className="main-area">
      <h1 className="heading">Some stuff I've made</h1>
      <div className="card-grid">
        {card_data.items.map((card) => (
          <Card key={card.id} content={card} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
