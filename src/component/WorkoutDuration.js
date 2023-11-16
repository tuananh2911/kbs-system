import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function TimesDurationSelection() {
  const navigate = useNavigate();
  const [selectedDuration, setSelectedDuration] = useState(null);

  const handleDurationSelect = (durationTime) => {
    setSelectedDuration(durationTime);
    navigate('/workout-duration'); // Chuyển hướng sau khi cập nhật trạng thái
  };

  const times = ["30 phút", "45 phút", "1 giờ", "Hãy để MadMuscles quyết định"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Bạn sẵn sàng dành bao nhiêu thời gian cho một buổi tập luyện?</h2>
      <div className="grid grid-cols-2 gap-4">
        {times.map((durationTime) => (
          <button
            key={durationTime}
            className={`px-4 py-2 rounded-md text-white font-medium ${selectedDuration === durationTime ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => handleDurationSelect(durationTime)} // Sử dụng handleAgeSelect ở đây
          >
            {durationTime}
          </button>
        ))}
      </div>
    </div>
  );
}


export default TimesDurationSelection;
