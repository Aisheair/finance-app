import React, { useEffect, useState } from 'react';
import './InfoCards.css';

const cards = [
  {
    title: 'Track',
    description: 'Monitor your daily expenses with intuitive tracking tools',
  },
  {
    title: 'Save',
    description: 'Set realistic saving goals and watch your progress',
  },
  {
    title: 'Grow',
    description: 'Make informed financial decisions to grow your wealth',
  }
];

const InfoCards: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation after slight delay
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`cards-container ${show ? 'show' : ''}`}>
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
