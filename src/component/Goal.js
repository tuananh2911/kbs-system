import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
async function getInfoGymMode(userGymData) {
  try {
    const response = await fetch("http://localhost:5000/app/gym-mode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userGymData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Response data:", data);
    // Xử lý dữ liệu phản hồi tại đây
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
function GoalSelect() {
  const navigate = useNavigate();
  const [selectedWeightGoal, setSelectedWeightGoal] = useState(null);

  const handleGoalSelect = async (goal) => {
    setSelectedWeightGoal(goal);
    const userGymData = {
      age: localStorage.getItem('age'),
      weight: localStorage.getItem('weight'),
      gender: localStorage.getItem('gender'),
      height: localStorage.getItem('height'),
      levelFitness: localStorage.getItem('levelFitness'),
      pushUp: localStorage.getItem('pushUp'),
      targetWeight: localStorage.getItem('targetWeight'),
      timeBreakfast: localStorage.getItem('timeBreakfast'),
      timeLunch: localStorage.getItem('timeLunch'),
      timeWorkout: localStorage.getItem('timeWorkout'),
      goalSelect: goal
    };
    const gymModeData = await getInfoGymMode(userGymData); // Gọi API và lấy dữ liệu
    navigate('/Summary', { state: { gymModeData } });
  };

  const weightGoals = ["Tăng cân", "Giữ cân", "Giảm cân"];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Mục tiêu của bạn là gì?</h2>
      <div className="w-full max-w-xs mx-auto">
        {weightGoals.map((goal) => (
          <button
            key={goal}
            className={`w-full px-4 py-3 mb-4 text-lg font-semibold text-center rounded-lg shadow transition-colors duration-300 ${
              selectedWeightGoal === goal ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-500 hover:text-white'
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
