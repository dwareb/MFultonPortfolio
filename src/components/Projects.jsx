import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../styles/Projects.css';
import card_data from './card_data.js';

const Projects = () => {
  const card_content = card_data.items;
  const num_cards = card_content.length;
  const [card_index, set_card_index] = useState(0);

  //Increase index to next card. Wrap around when at the end of the list back to the start.
  const next_card = () => {
    if (card_index === num_cards - 1) {
      set_card_index(0);
    } else {
      set_card_index(card_index + 1);
    }
  };

  //Decrease index to previous card. Wrap around to end when at start of list.
  const prev_card = () => {
    if (card_index === 0) {
      set_card_index(num_cards - 1);
    } else {
      set_card_index(card_index - 1);
    }
  };

  return (
    <div className="main-area">
      <h1 className="heading">Some stuff I've made</h1>
      <div className="card-grid">
        {card_content.map((card) => (
          <Card key={card.id} content={card} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
