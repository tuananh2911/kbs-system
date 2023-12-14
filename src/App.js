import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AgeSelection from './component/AgeSelection';
import Height from './component/Height';
import Weight from './component/Weight';
import TargetWeight from './component/TargetWeight';
import LevelFitnessSelection from './component/LevelOfFitness';
import PhysicalCondition from './component/PhysicalCondition';
import WorkoutTime from './component/WorkoutTime';
import GenderSelect from './component/GenderSelection';
import GoalSelect from './component/Goal';
import GymMode from './component/GymMode';
import logo from './assets/logo.png';
import ProgressBar from './component/ProgressBar';
import NumberExercise from './component/NumberExercise'
// Import các trang khác ở đây

function App() {
  return (
    <Router>
      <div className="grid-pattern h-screen overflow-y-auto hide-scrollbar">
      <img src={logo} alt="Logo" className="absolute top-0 left-0 m-4 w-40" />
      <ProgressBar /> {/* Include the ProgressBar component */}
        <Routes>
          <Route path="" element={<AgeSelection />} />
          <Route path="/height" element={<Height />} />
          <Route path="/weight" element={<Weight />} />
          <Route path="/gender" element={<GenderSelect />} />
          <Route path="/goal" element={<GoalSelect />} />
          <Route path="/weight" element={<Weight />} />
          <Route path="/target-weight" element={<TargetWeight />} />
          <Route path='/level-fitness-selection' element={<LevelFitnessSelection />} />
          <Route path='/physical-condition' element={<PhysicalCondition />} />
          <Route path='/workout-time' element={<WorkoutTime />} />
          <Route path='/number-exercise' element={<NumberExercise />} />
          <Route path='/summary' element={<GymMode />} />
          {/* Định nghĩa các Route khác ở đây */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
