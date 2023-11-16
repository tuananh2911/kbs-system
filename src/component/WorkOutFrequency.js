import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function FrequencySelection() {
  const navigate = useNavigate();
  const [selectedFrequency, setSelectedFrequency] = useState(null);

  const handleAgeSelect = (frequency) => {
    setSelectedFrequency(frequency);
    navigate('/workout-frequency'); // Chuyển hướng sau khi cập nhật trạng thái
  };

  const frequencies = ["Không tập ", "1-2 lần một tuần", "3 lần một tuần", "Hơn 3 lần một tuần"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Bạn đã tập luyện bao nhiêu lần mỗi tuần trong 3 tháng qua?</h2>
      <div className="grid grid-cols-2 gap-4">
        {frequencies.map((frequency) => (
          <button
            key={frequency}
            className={`px-4 py-2 rounded-md text-white font-medium ${selectedFrequency === frequency ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => handleAgeSelect(frequency)} // Sử dụng handleAgeSelect ở đây
          >
            {frequency}
          </button>
        ))}
      </div>
    </div>
  );
}


export default FrequencySelection;
