import React, { useState } from 'react';
import '../App.css';

const Muscle = ({ onNextClick, setMuscleNameList, muscleNameList }) => {
  const [checkboxState, setCheckboxState] = useState({});

  const handleCheckboxChange = (checkboxText) => {
    // Toggle checkbox state
    const newState = {
      ...checkboxState,
      [checkboxText]: !checkboxState[checkboxText],
    };
    setCheckboxState(newState);

    // Update muscle list
    if (newState[checkboxText]) {
      // Add muscle name if checkbox is checked
      setMuscleNameList([...muscleNameList, checkboxText]);
    } else {
      // Remove muscle name if checkbox is unchecked
      setMuscleNameList(muscleNameList.filter(name => name !== checkboxText));
    }

    console.log(newState)
  };

  // Generate checkbox labels dynamically to minimize redundancy
  const muscleNames = ["abdominals", "abductors", "biceps", "calves", "chest", "forearms", "glutes", "hamstrings", "lats", "lower_back", "middle_back", "neck", "quadriceps", "traps", "triceps"];
  
  return (
    <div className="container-fluid full-height-section">
      <h1 className='difficulty-subheading'>Which muscle group(s) do you want to exercise?</h1>
      <br></br>
      <br></br>
      <br></br>

      <div className="checkboxes-container">
        {muscleNames.map((muscle, index) => (
            <label key={muscle} className="muscle-label">
                <input
                type="checkbox"
                checked={!!checkboxState[muscle]}
                onChange={() => handleCheckboxChange(muscle)}
                className="muscle-checkbox"
                />
                <span className="muscle-button">
                {muscle.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </span>
            </label>
        ))}
      </div>
        <br></br>
        <button className='next-button' onClick={onNextClick}>Next</button>
    </div>
  );
  
}

export default Muscle;
