import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Weight() {
  const navigate = useNavigate();
  const [weight, setWeight] = useState('');

  const handleWeightChange = (event) => {

      localStorage.setItem('weight', event.target.value);
    setWeight(event.target.value);
  };

  const handleOKClick = () => {
    // Thực hiện các xử lý cần thiết với chiều cao (ví dụ: kiểm tra hợp lệ)
    navigate('/TargetWeight');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mt-4">
        <label htmlFor="weight" className="text-lg font-medium">Nhập cân nặng của bạn:</label>
        <input
          type="number"
          id="weight"
          className="border border-gray-500 px-2 py-1 ml-2"
          value={weight}
          onChange={handleWeightChange}
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

export default Weight;
