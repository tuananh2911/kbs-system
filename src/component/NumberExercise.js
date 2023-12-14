import React from "react";
import { useNavigate } from "react-router-dom";
import "./Css/LevelOfFitness.css";

function NumberExercise() {
  const navigate = useNavigate();

  const handleFitnessLevelChange = (level) => {
    sessionStorage.setItem("numberExercise", level);
    navigate("/summary");
  };

  const levelsFitness = [3, 5, 6];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-8">
        Bạn muốn tập gym bao nhiêu buổi 1 tuần?
      </h2>
      <h2 className="text-2xl font-bold mb-4">(Dưới đây là gợi ý của chuyên gia)</h2>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {levelsFitness.map((NumberExercise) => (
          <button
            key={NumberExercise}
            className="fitness-button"
            onClick={() => handleFitnessLevelChange(NumberExercise)}
          >
            {NumberExercise}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NumberExercise;
