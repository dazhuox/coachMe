import React, { useState } from 'react';
import '../App.css'

const Difficulty = ({onNextClick, setDifficultyName}) => {
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
  
   
    const handleClick = (difficulty) => {
        let newDifficulty = difficulty;
        setSelectedDifficulty(newDifficulty);
        setDifficultyName(newDifficulty);

        console.log(newDifficulty);
      };

    return (
        <div className="container-fluid full-height-section">
          <h1 className="difficulty-subheading mb-4"><b>How familiar are you with diverse exercises</b></h1>
          <h1 className="difficulty-subheading"><b>and gym equipment?</b></h1>
          <div className="buttons-container">
            <button 
                className={`difficulty-button ${selectedDifficulty === 'beginner' ? 'selected' : ''}`} 
                onClick={() => handleClick("beginner")}
                >
                <b>Unfamiliar</b>
            </button>
            <button 
                className={`difficulty-button ${selectedDifficulty === 'intermediate' ? 'selected' : ''}`} 
                onClick={() => handleClick("intermediate")}
                >
                <b>Intermediate</b>
            </button>
            <button 
                className={`difficulty-button ${selectedDifficulty === 'expert' ? 'selected' : ''}`} 
                onClick={() => handleClick("expert")}
                >
                <b>Familiar</b>
            </button>
          </div>
          <button className='next-button mt-4' onClick={onNextClick}>Next</button>
        </div>
      );
    }

export default Difficulty;