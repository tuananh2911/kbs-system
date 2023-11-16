import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function MeasureFill() {
  const navigate = useNavigate();
  const [selectedMeasureFill, setMeasureFill] = useState(null);

  const handleMeasure = (age) => {
    setMeasureFill(age);
    navigate('/measures'); // Chuyển hướng sau khi cập nhật trạng thái
  };

  const ages = ["18-25", "26-30", "31-35", "36-40"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Chọn Độ Tuổi Của Bạn</h2>
      <div className="grid grid-cols-2 gap-4">
        {ages.map((age) => (
          <button
            key={age}
            className={`px-4 py-2 rounded-md text-white font-medium ${selectedMeasureFill === age ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => handleMeasure(age)} // Sử dụng handleAgeSelect ở đây
          >
            {age}
          </button>
        ))}
      </div>
    </div>
  );
}


export default MeasureFill;
