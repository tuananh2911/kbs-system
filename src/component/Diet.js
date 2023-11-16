import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function DietSelection() {
  const navigate = useNavigate();
  const [selectedDiet, setSelectedDiet] = useState(null);

  const handleDietSelect = (diet) => {
    setSelectedDiet(diet);
    navigate('/diets'); // Chuyển hướng sau khi cập nhật trạng thái
  };

  const diets = ["Ăn chay trường Không bao gồm thịt", "Ăn chay", "Keto", "Địa Trung Hải", "Không có cái nào ở trên"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Chọn Độ Tuổi Của Bạn</h2>
      <div className="grid grid-cols-2 gap-4">
        {diets.map((diet) => (
          <button
            key={diet}
            className={`px-4 py-2 rounded-md text-white font-medium ${selectedDiet === diet ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => handleDietSelect(diet)} // Sử dụng handleAgeSelect ở đây
          >
            {diet}
          </button>
        ))}
      </div>
    </div>
  );
}


export default DietSelection;
