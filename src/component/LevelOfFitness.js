import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/LevelOfFitness.css";

function LevelFitnessSelection() {
  const navigate = useNavigate();
  const [selectedLevelFitness, setSelectedLevelFitness] = useState(null);
  const [workoutDuration, setWorkoutDuration] = useState('');

  const handleLevelFitnessSelect = () => {
    sessionStorage.setItem("frequentlyGym", parseInt(selectedLevelFitness));
    sessionStorage.setItem("workoutDuration", workoutDuration);
    navigate("/physical-condition");
  };

  const levelsFitness = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-8">
        Mức độ tập thể hình của bạn là gì (số ngày trong tuần)?
      </h2>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {levelsFitness.map((levelFitness) => (
          <button
            key={levelFitness}
            style={{ backgroundColor: selectedLevelFitness === levelFitness ? '#f59e0b' : '#60a5fa' }} // Using inline styles for color change
            className="fitness-button"
            onClick={() => setSelectedLevelFitness(levelFitness)}
          >
            {levelFitness}
          </button>
        ))}
      </div>
      <div className="w-full mb-4">
        <h3 className="text-2xl font-bold mb-4 text-center">
          Trung bình mỗi tuần 1 buổi tập bạn tập trong bao lâu?
        </h3>
        <div className="flex justify-center">
          <input
            type="number"
            className="border-2 bg-slate-900 border-gray-300 p-2 rounded-md"
            placeholder="Nhập thời gian tập luyện (phút)"
            value={workoutDuration}
            onChange={(e) => setWorkoutDuration(e.target.value)}
            style={{ minWidth: '260px' }}
          />
        </div>
      </div>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={handleLevelFitnessSelect}
        disabled={!selectedLevelFitness && !workoutDuration}
      >
        Tiếp tục
      </button>
    </div>
  );
}

export default LevelFitnessSelection;
