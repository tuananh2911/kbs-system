import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/LevelOfFitness.css";

function LevelFitnessSelection() {
  const navigate = useNavigate();
  const [selectedLevelFitness, setSelectedLevelFitness] = useState(null);

  const handleLevelFitnessSelect = (levelFitness) => {
    setSelectedLevelFitness(levelFitness);
    sessionStorage.setItem("frequentlyGym", parseInt(levelFitness));
    navigate("/physical-condition");
  };

  const levelsFitness = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-8">
        Mức độ tập thể hình của bạn là gì(số ngày trong tuần)?
      </h2>
      <div className="grid grid-cols-4 gap-4">
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
