import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function GoalSelection({ onGoalSelect }) {
  const [selectedGoal, setSelectedGoal] = useState('');
  const navigate = useNavigate();

  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal);
    // Chuyển hướng người dùng
    navigate('/another-page'); // Thay '/another-page' bằng đường dẫn bạn muốn chuyển đến
  };
  const goals = ["Tăng cơ bắp", "Giảm cân", "Cắt nét cơ"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Chọn Mục Tiêu Của Bạn</h2>
      <div className="grid grid-cols-2 gap-4">
        {goals.map((goal) => (
          <button
            key={goal}
            className={`px-4 py-2 rounded-md text-white font-medium ${selectedGoal === goal ? 'bg-green-600' : 'bg-green-500'}`}
            onClick={() => {
              setSelectedGoal(goal);
              onGoalSelect(goal);
            }}
          >
            {goal}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GoalSelection;
