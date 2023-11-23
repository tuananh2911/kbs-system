import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PhysicalCondition = () => {
  const navigate = useNavigate();
  const [pushUpCount, setPushUpCount] = useState('');

  const handleSubmit = () => {
    if (pushUpCount < 1 || pushUpCount > 40) {
      alert('Vui lòng nhập số lượng hít đất từ 1 đến 40.');
      return;
    }
    localStorage.setItem('pushUp', pushUpCount);
    navigate('/WorkoutTime', { state: { pushUpCount } });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Nhập Số Lượng Hít Đất Của Bạn</h2>
      <div className="mb-4">
        <input
          type="number"
          id="pushUpCount"
          value={pushUpCount}
          onChange={(e) => setPushUpCount(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Nhập số từ 1 đến 40"
          min="1"
          max="40"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Xác Nhận
      </button>
    </div>
  );
};

export default PhysicalCondition;
