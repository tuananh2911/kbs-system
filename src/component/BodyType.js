import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function BodyTypeSelection() {
  const navigate = useNavigate();
  const [selectedBodyType, setSelectedBodyType] = useState(null);

  const handleBodySelect = (bodyType) => {
    setSelectedBodyType(bodyType);
    navigate('/body-type'); // Chuyển hướng sau khi cập nhật trạng thái
  };

  const bodyTypes = ["18-25", "26-30", "31-35", "36-40"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Chọn Độ Tuổi Của Bạn</h2>
      <div className="grid grid-cols-2 gap-4">
        {bodyTypes.map((bodyType) => (
          <button
            key={bodyType}
            className={`px-4 py-2 rounded-md text-white font-medium ${selectedBodyType === bodyType ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => handleBodySelect(bodyType)} // Sử dụng handleAgeSelect ở đây
          >
            {bodyType}
          </button>
        ))}
      </div>
    </div>
  );
}


export default BodyTypeSelection;
