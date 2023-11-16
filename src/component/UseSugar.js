import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function FrequencyUseSugarSelection() {
  const navigate = useNavigate();
  const [selectedFrequencyUseSugar, setSelectedFrequencyUseSugar] = useState(null);

  const handleFrequencyUseSugarSelect = (frequency) => {
    setSelectedFrequencyUseSugar(frequency);
    navigate('/how-often-sugar'); // Chuyển hướng sau khi cập nhật trạng thái
  };

  const frequenciesUseSugar = ["Không thường xuyên. Tôi không hảo ngọt", "3-5 lần mỗi tuần ", "Khá nhiều mỗi ngày"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Chọn Độ Tuổi Của Bạn</h2>
      <div className="grid grid-cols-2 gap-4">
        {frequenciesUseSugar.map((frequency) => (
          <button
            key={frequency}
            className={`px-4 py-2 rounded-md text-white font-medium ${selectedFrequencyUseSugar === frequency ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => handleFrequencyUseSugarSelect(frequency)} // Sử dụng handleAgeSelect ở đây
          >
            {frequency}
          </button>
        ))}
      </div>
    </div>
  );
}


export default FrequencyUseSugarSelection;
