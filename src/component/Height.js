import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Height() {
  const navigate = useNavigate();
  const [height, setHeight] = useState(''); // Thêm state cho chiều cao

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleOKClick = () => {
    // Thực hiện các xử lý cần thiết với chiều cao (ví dụ: kiểm tra hợp lệ)
    navigate('/Weight');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Thêm ô nhập chiều cao và nút OK */}
      <div className="mt-4">
        <label htmlFor="height" className="text-lg font-medium">Nhập Chiều Cao của bạn:</label>
        <input
          type="number"
          id="height"
          className="border border-gray-500 px-2 py-1 ml-2"
          value={height}
          onChange={handleHeightChange}
          autoComplete='off'
          placeholder='Đơn vị cm'
        />
        <button
          className="bg-green-500 text-white px-4 py-2 ml-2 rounded-md"
          onClick={handleOKClick}
        >
          Tiếp Tục
        </button>
      </div>
    </div>
  );
}

export default Height;
