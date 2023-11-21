import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TimePrepareMeal = () => {
  const navigate = useNavigate();
  const [morningTime, setMorningTime] = useState('');
  const [noonTime, setNoonTime] = useState('');
  const [eveningTime, setEveningTime] = useState('');

  const handleOKClick = () => {
    // Thực hiện các xử lý cần thiết với thời gian nấu ăn
    navigate('/no'); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Bạn giành bao nhiêu thời gian để nấu ăn?</h2>
      <div className="mb-4">
        <label htmlFor="morningTime" className="text-lg font-medium" >Buổi Sáng:</label>
        <input q
          type="text"
          id="morningTime"
          className="border border-gray-500 px-2 py-1 ml-2"
          value={morningTime}
          onChange={(e) => setMorningTime(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="noonTime" className="text-lg font-medium">Buổi Trưa:</label>
        <input
          type="text"
          id="noonTime"
          className="border border-gray-500 px-2 py-1 ml-2"
          value={noonTime}
          onChange={(e) => setNoonTime(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="eveningTime" className="text-lg font-medium">Buổi Tối:</label>
        <input
          type="text"
          id="eveningTime"
          className="border border-gray-500 px-2 py-1 ml-2"
          value={eveningTime}
          onChange={(e) => setEveningTime(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleOKClick}
      >
        OK
      </button>
    </div>
  );
};

export default TimePrepareMeal;
