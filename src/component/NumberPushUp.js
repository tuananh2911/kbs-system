import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function NumberPushUpSelection() {
  const navigate = useNavigate();
  const [numberPushUp, setNumberPushUp] = useState(null);

  const handleNumberPushUpSelect = (selectionNumberPushUp) => {
    setNumberPushUp(selectionNumberPushUp);
    navigate('/push-ups'); // Chuyển hướng sau khi cập nhật trạng thái
  };

  const ages = ["Dưới 10", "10 đến 20", "21 đến 30", "Hơn 30"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Chọn Độ Tuổi Của Bạn</h2>
      <div className="grid grid-cols-2 gap-4">
        {ages.map((selectionNumberPushUp) => (
          <button
            key={selectionNumberPushUp}
            className={`px-4 py-2 rounded-md text-white font-medium ${numberPushUp === selectionNumberPushUp ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => handleNumberPushUpSelect(selectionNumberPushUp)} // Sử dụng handleAgeSelect ở đây
          >
            {selectionNumberPushUp}
          </button>
        ))}
      </div>
    </div>
  );
}


export default NumberPushUpSelection;
