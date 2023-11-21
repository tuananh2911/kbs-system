import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PhysicalCondition = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState(null);

  const levels = [
    { label: 'Thấp', pushUp: '< 10', pullUp: '< 5' },
    { label: 'Trung Bình', pushUp: '10 - 20', pullUp: '5 - 10' },
    { label: 'Cao', pushUp: '20 - 30', pullUp: '10 - 15' },
    { label: 'Rất Cao', pushUp: '> 30', pullUp: '> 15' },
  ];

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    navigate('/WorkoutTime', { state: { level } });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Chọn Mức Độ Thể Chất Của Bạn</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {levels.map((level) => (
          <div
            key={level.label}
            className={`p-4 transition-transform transform hover:scale-105 cursor-pointer rounded-md ${
              selectedLevel === level ? 'bg-blue-600' : 'bg-blue-500'
            }`}
            onClick={() => handleLevelSelect(level)}
          >
            <p className="text-white font-medium">{level.label}</p>
            <div className="mt-2 text-gray-300">
              <p>Push-up: {level.pushUp}</p>
              <p>Pull-up: {level.pullUp}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedLevel && (
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Chi Tiết Mức Độ Thể Chất</h3>
          <p>Push-up: {selectedLevel.pushUp}</p>
          <p>Pull-up: {selectedLevel.pullUp}</p>
        </div>
      )}
    </div>
  );
};

export default PhysicalCondition;
