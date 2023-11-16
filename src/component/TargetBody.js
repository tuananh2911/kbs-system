import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function TargetBodySelection() {
  const navigate = useNavigate();
  const [selectedBody, setSelectedTargetBody] = useState(null);

  function handleTargetBodySelect(body) {
    setSelectedTargetBody(body);
    navigate('/target-body'); // Chuyển hướng sau khi cập nhật trạng thái
  }

  const targetsBody = ["Thân hình mảnh mai", "Thân hình mảnh, cắt nét"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Chọn Độ Tuổi Của Bạn</h2>
      <div className="grid grid-cols-2 gap-4">
        {targetsBody.map((body) => (
          <button
            key={body}
            className={`px-4 py-2 rounded-md text-white font-medium ${selectedBody === body ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => handleTargetBodySelect(body)} // Sử dụng handleAgeSelect ở đây
          >
            {body}
          </button>
        ))}
      </div>
    </div>
  );
}


export default TargetBodySelection;
