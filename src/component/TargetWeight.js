import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TargetWeight() {
  const navigate = useNavigate();
  const [TargetWeight, setTargetWeight] = useState(null);

  const handleTargetWeightChange = (event) => {
    localStorage.setItem('targetWeight', event.target.value);
    setTargetWeight(event.target.value);
  };
  const handleOKClick = () => {
    // Thực hiện các xử lý cần thiết 

    navigate('/LevelFitnessSelection');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mt-4">
        <label htmlFor="weight" className="text-lg font-medium">Nhập mục tiêu cân nặng của bạn:</label>
        <input
          type="number"
          id="TargetWeight"
          className="border border-gray-500 px-2 py-1 ml-2"
          value={TargetWeight}
          onChange={handleTargetWeightChange}
          autoComplete='off'
          placeholder='Đơn vị kg'
        />
        <button
          className="bg-green-500 text-white px-4 py-2 ml-2 rounded-md"
          onClick={handleOKClick}
        >
          Tiếp tục
        </button>
      </div>
    </div>
  );
}

export default TargetWeight;
