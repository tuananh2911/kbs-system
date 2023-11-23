import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
function GymMode() {
const location = useLocation();
  const gymModeData = location.state?.gymModeData;
  const [caloToMaintain, setCaloToMaintain] = useState(gymModeData.caloCurrent); // Giả sử
  const [caloToReachGoal, setCaloToReachGoal] = useState(gymModeData.goalCalo); // Giả sử
  const [timeToReachGoal, setTimeToReachGoal] = useState(gymModeData.timeToGoal); // Giả sử

  const mealPlan = [
    { day: 'Thứ Hai', meals: [`Bữa sáng: ${gymModeData.mealBreakfast}`, `Bữa trưa: ${gymModeData.mealLunch}`, `Bữa tối: ${gymModeData.mealDinner}`] },
    // ... dữ liệu cho các ngày khác
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Chế Độ Dinh Dưỡng Của Bạn</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Thông Tin Calo</h2>
        <p>Calo để giữ dáng: <span className="font-semibold">{caloToMaintain} calo/ngày</span></p>
        <p>Calo để đạt mục tiêu: <span className="font-semibold">{caloToReachGoal} calo/ngày</span></p>
        <p>Thời gian dự kiến để đạt mục tiêu: <span className="font-semibold">{timeToReachGoal}</span></p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Chế Độ Ăn Khuyến Nghị Cho Bạn</h2>
        {mealPlan.map((dayPlan, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-lg mb-2">{dayPlan.day}</h3>
            <ul className="list-disc pl-5">
              {dayPlan.meals.map((meal, mealIndex) => (
                <li key={mealIndex}>{meal}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GymMode;
