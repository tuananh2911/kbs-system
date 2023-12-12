import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function GoalSelect() {
  const navigate = useNavigate();
  const [selectedWeightGoal, setSelectedWeightGoal] = useState(null);

  const handleGoalSelect = async (goal) => {
    setSelectedWeightGoal(goal);
    sessionStorage.setItem("goal", goal);
    navigate("/summary");
  };

  const weightGoals = ["Tăng cân", "Giữ cân", "Giảm cân"];

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h2 className="text-3xl font-bold mb-8">
        Mục tiêu của bạn là gì?
      </h2>
      <div className="w-full max-w-xs mx-auto">
        {weightGoals.map((goal) => (
          <button
            key={goal}
            className={`w-full px-4 py-3 mb-4 text-lg font-semibold text-center rounded-lg shadow transition-colors duration-300 ${
              selectedWeightGoal === goal
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 hover:bg-blue-500 hover:text-white"
            }`}
            onClick={() => handleGoalSelect(goal)}
          >
            {goal}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GoalSelect;
