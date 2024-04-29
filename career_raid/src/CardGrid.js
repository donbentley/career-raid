import React from 'react';
import './CardGrid.css';

const CardGrid = ({ data }) => {
  return (
    <div className="card-grid">
      {data.map((item, index) => (
        <div key={index} className="card">
          <img src={item.image} alt={item.title} /> {/* Add the image */}
          <h2>{item.title}</h2>
          <p>{item.role}</p>
          <p>Status: {item.status}</p> {/* Render the status */}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
