import React, { useState } from 'react';
import'../App.css'

const Type = ({onNextClick, setTypeName}) => {

  const [selectedType, setSelectedType] = useState('');


 const handleClick = (type) => {
  setSelectedType(type);
  setTypeName(type); // Assuming you want to lift the state up for some reason
};

  return (
    <div className="container-fluid full-height-section">
      <h1 className='difficulty-subheading'>What type of workout do you want to do?</h1>
      <div className="buttons-container">
        {["cardio", "strength", "stretching", "plyometrics"].map((type) => (
          <button
            key={type}
            className={`difficulty-button ${selectedType === type ? "clicked" : ""}`}
            onClick={() => handleClick(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
        <br></br>
        <button className='next-button' onClick={onNextClick}>Next</button>
    </div>
  );
}

export default Type;