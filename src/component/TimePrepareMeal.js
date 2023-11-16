import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function TimePrepareMealSelection() {
  const navigate = useNavigate();
  const [selectedTimesPrepare, setSelectedTimesPrepare] = useState(null);

  const handleTimesPrepareSelect = (age) => {
    setSelectedTimesPrepare(age);
    navigate('/time-prepare-meal'); // Chuyển hướng sau khi cập nhật trạng thái
  };

  const timesPrepare = ["18-25", "26-30", "31-35", "36-40"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Chọn Độ Tuổi Của Bạn</h2>
      <div className="grid grid-cols-2 gap-4">
        {timesPrepare.map((timePrepare) => (
          <button
            key={timePrepare}
            className={`px-4 py-2 rounded-md text-white font-medium ${selectedTimesPrepare === timePrepare ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => handleTimesPrepareSelect(timePrepare)} // Sử dụng handleAgeSelect ở đây
          >
            {timePrepare}
          </button>
        ))}
      </div>
    </div>
  );
}


export default TimePrepareMealSelection;
