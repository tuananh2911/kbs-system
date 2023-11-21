import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/LevelOfFitness.css';

function LevelFitnessSelection() {
  const navigate = useNavigate();
  const [selectedLevelFitness, setSelectedLevelFitness] = useState(null);

  const handleLevelFitnessSelect = (levelFitness) => {
    setSelectedLevelFitness(levelFitness);
    navigate('/PhysicalCondition');
  };

  const levelsFitness = ["1", "2", "3", "4", "5"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Mức độ tập thể hình của bạn là gì?</h2>
      <div className="grid grid-cols-5 gap-4">
        {levelsFitness.map((levelFitness) => (
          <button
            key={levelFitness}
            className={`fitness-button`}
            onClick={() => handleLevelFitnessSelect(levelFitness)}
          >
            {levelFitness}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LevelFitnessSelection;
