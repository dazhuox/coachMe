import React, { useState } from 'react';
import '../App.css'

const Welcome = ({ onNextClick }) => {

  return (
    <div className="container-fluid full-height-section">
        <div>

            <p className='welcome-subheading'>Welcome to</p>
            <h1 className='welcome-heading mt-0'>CoachMe</h1    >
            <p className='welcome-motto'>Generate a tailored workout to your needs in seconds</p>
            <button className='next-button mt-4' onClick={onNextClick}><b>Start Now</b></button>
      
      </div>
    </div>
  );
}

export default Welcome;
