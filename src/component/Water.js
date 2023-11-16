import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function DrinkingRegimenSelection() {
  const navigate = useNavigate();
  const [selectedDrinkingRegimen, setSelectedDrinkingRegimen] = useState(null);

  const handleDrinkingRegimenSelect = (drinkingRegimen) => {
    setSelectedDrinkingRegimen(drinkingRegimen);
    navigate('/water'); // Chuyển hướng sau khi cập nhật trạng thái
  };

  const drinkingRegimens = ["Chỉ cà phê hoặc trà ", "Ít hơn 2 cốc", "2-6 cốc ", "7-10 cốc","Hơn 10 cốc"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Hằng ngày bạn uống bao nhiêu nước?</h2>
      <div className="grid grid-cols-2 gap-4">
        {drinkingRegimens.map((drinkingRegimen) => (
          <button
            key={drinkingRegimen}
            className={`px-4 py-2 rounded-md text-white font-medium ${selectedDrinkingRegimen === drinkingRegimen ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => handleDrinkingRegimenSelect(drinkingRegimen)} // Sử dụng handleAgeSelect ở đây
          >
            {drinkingRegimen}
          </button>
        ))}
      </div>
    </div>
  );
}


export default DrinkingRegimenSelection;
