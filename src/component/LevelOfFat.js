import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function LevelFatSelection() {
  const navigate = useNavigate();
  const [selectedLevelFat, setSelectedLevelFat] = useState(null);

  const handleLevelFatSelect = (levelFat) => {
    setSelectedLevelFat(levelFat);
    navigate('/level-of-fat'); // Chuyển hướng sau khi cập nhật trạng thái
  };

  const levelsFat = ["5-9%", "", "10-14%", "15-19%","20-24%","25-29%","30-34%","35-39%",">40%"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Chọn Độ Tuổi Của Bạn</h2>
      <div className="grid grid-cols-2 gap-4">
        {levelsFat.map((levelFat) => (
          <button
            key={levelFat}
            className={`px-4 py-2 rounded-md text-white font-medium ${selectedLevelFat === levelFat ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => handleLevelFatSelect(levelFat)} // Sử dụng handleAgeSelect ở đây
          >
            {levelFat}
          </button>
        ))}
      </div>
    </div>
  );
}


export default LevelFatSelection;
