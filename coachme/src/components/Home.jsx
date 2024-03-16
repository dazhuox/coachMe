import React, { useState, useEffect } from 'react'
import { exerciseOptions, fetchData } from '../api/fetchData';

const Home = ({typeName, difficultyName, muscleNameList}) => {
  const [exercises, setExercices] = useState([]);

  const [muscleSearch, setMuscleSearch] = useState('');
  const [difficultySearch, setDifficultySearch] = useState('');
  const [typeSearch, setTypeSearch] = useState('');

  const [muscleList, setMuscleList] = useState([]);
  
  const [exercicesList, setExercicesList] = useState([]);

  
  const [visibleDetails, setVisibleDetails] = useState({}); // Tracks visibility of exercise details

  const toggleDetailsVisibility = (index) => {
    setVisibleDetails(prevState => ({ ...prevState, [index]: !prevState[index] }));
  };


// HELPER FUNCTIONS
  const handleDifficultyForm = () => {

    console.log(difficultyName)

  }

  const handleTypeForm = () => {
    console.log(typeName)
    
  }

  const handleMuscleForm = () => {
    console.log(muscleNameList)
    
  }
  
  
// end of helper functions



//FINAL SUBMIT FORM FUNCTION

// once the muscle list is finalized and the diffculty & type are set, submit and run this function
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    
    // 'muscleList' is final muscleList
    // 'difficultySearch' is difficulty chosen
    // 'typeSearch' is search chosen
    let newExerciseList = []
    for (let i = 0; i < muscleNameList.length; i++) {
      const Data = await fetchData(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${muscleNameList[i]}&difficulty=${difficultyName}&type=${typeName}`, exerciseOptions)

      setExercices(Data)

      console.log(Data)

      //if there are 3 muscles or less selected
      if (muscleList.length < 4) {
        newExerciseList = [...newExerciseList, Data[0], Data[1], Data[2] ];
      } else if (muscleList.length < 7) {
        newExerciseList = [...newExerciseList, Data[0], Data[1]];
      }
      
      
      console.log(newExerciseList)

      setExercices([])
    }

    setExercicesList(newExerciseList)

  }


  return (
    <>
    <div className='container-fluid full-height-section'>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10vh' }}>
            <button className='submit-button' type="button" onClick={handleSubmitForm}>
                Show my workout
            </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '0px', padding: '0 20px' }}>
            {exercicesList.map((data, index) => (
            <div key={index} className="exercise-card">
                <div className="exercise-summary" onClick={() => toggleDetailsVisibility(index)}>
                <div><strong><b>Exercise name:</b></strong> {data.name}</div>
                <div><strong>Exercise muscle:</strong> {data.muscle}</div>
                </div>
                {visibleDetails[index] && (
                <div className="exercise-details">
                    <div><strong>Exercise difficulty:</strong> {data.difficulty}</div>
                    <div><strong>Exercise Type:</strong> {data.type}</div>
                </div>
                )}
            </div>
            ))}
        </div>
    </div>
      
    </>
  );
}

export default Home
