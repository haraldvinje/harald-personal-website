import React from 'react';
import MyImage from '../images/harald.png';

const Card: React.FC = () => {
  return (
    <div className="card">
      <img src={MyImage} alt="Avatar" className="avatar-img" />
      <div className="card-container">
        <h4>Harald Vinje</h4>
        <p>Software engineer & Data Scientist</p>
      </div>
    </div>
  );
};

export default Card;
