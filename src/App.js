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
import TimePrepareMeal from './component/TimePrepareMeal';
// Import các trang khác ở đây

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Ứng Dụng Tư Vấn Fitness</h1>
        <Routes>
          <Route path="" element={<AgeSelection />} />
          <Route path="/Height" element={<Height />} />
          <Route path="/Weight" element={<Weight />} />
          <Route path="/TargetWeight" element={<TargetWeight />} />
          <Route path='/LevelFitnessSelection' element={<LevelFitnessSelection />} />
          <Route path='/PhysicalCondition' element={<PhysicalCondition />} />
          <Route path='/WorkoutTime' element={<WorkoutTime />} />
          <Route path='/TimePrepareMeal' element={<TimePrepareMeal />} />
          {/* Định nghĩa các Route khác ở đây */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
