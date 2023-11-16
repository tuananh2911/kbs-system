import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function LevelFitnessSelection() {
  const navigate = useNavigate();
  const [selectedLevelFitness, setSelectedLevelFitness] = useState(null);

  const handleLevelFitnessSelect = (levelFitness) => {
    setSelectedLevelFitness(levelFitness);
    navigate('/level-of-fitness'); // Chuyển hướng sau khi cập nhật trạng thái
  };

  const levelsFitness = ["1", "2", "3", "4","5"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Mức độ tập thể hình của bạn là gì?</h2>
      <div className="grid grid-cols-2 gap-4">
        {levelsFitness.map((levelFitness) => (
          <button
            key={levelFitness}
            className={`px-4 py-2 rounded-md text-white font-medium ${selectedLevelFitness === levelFitness ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => handleLevelFitnessSelect(levelFitness)} // Sử dụng handleAgeSelect ở đây
          >
            {levelFitness}
          </button>
        ))}
      </div>
    </div>
  );
}


export default LevelFitnessSelection;
