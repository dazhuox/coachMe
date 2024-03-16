import './App.css';

import React, { useEffect, useRef, useState } from 'react';

import Welcome from './components/welcome';
import Workout from './components/workout';
import Difficulty from './components/difficulty';
import Muscle from './components/muscle-group';
import Type from './components/type';
import Home from './components/Home'

const App = () => {
  const [difficultyName, setDifficultyName] = useState("");
  const [typeName, setTypeName] = useState("");
  const [muscleNameList, setMuscleNameList] = useState([]);

  const welcome = useRef(null);
  const difficulty = useRef(null);
  const muscle = useRef(null);
  const type = useRef(null);
  const home = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNextWelcome = () => scrollToRef(welcome);
  const handleNextDifficulty = () => scrollToRef(difficulty);
  const handleNextMuscle = () => scrollToRef(muscle);
  const handleNextType = () => scrollToRef(type);
  const handleNextHome = () => scrollToRef(home);

  // const toggleScrolling = (isAllowed) => {
  //   document.body.style.overflow = isAllowed ? 'auto' : 'hidden';
  // };

  // Call toggleScrolling when the App component mounts to block scrolling initially
  // useEffect(() => {
  //   toggleScrolling(false);
  //   // Optional: If you want to re-enable scrolling when the component unmounts
  //   return () => toggleScrolling(true);
  // }, []);

  return (
    <>
      <div ref={welcome}>
          <Welcome onNextClick={handleNextDifficulty} />
      </div>

      <div ref={difficulty}>
        <Difficulty onNextClick={handleNextMuscle} setDifficultyName={setDifficultyName} />
      </div>

      <div ref={muscle}>
        <Muscle onNextClick={handleNextType} setMuscleNameList={setMuscleNameList} muscleNameList={muscleNameList}/>
      </div>

      <div ref={type} >
        <Type setTypeName={setTypeName} onNextClick={handleNextHome}/>
      </div>

      <div ref={home}>
        <Home typeName={typeName} difficultyName={difficultyName} muscleNameList={muscleNameList}/>
      </div>
    </>
  );
}

export default App;
