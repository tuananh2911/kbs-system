import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AgeSelection from './component/AgeSelection';
import GoalSelection from './component/GoalSelection';
// Import các trang khác ở đây

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Ứng Dụng Tư Vấn Fitness</h1>
        <Routes>
          <Route path="" element={<AgeSelection />} />
          <Route path="/goal-selection" element={<GoalSelection />} />
          {/* Định nghĩa các Route khác ở đây */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
