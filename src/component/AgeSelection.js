import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AgeSelection() {
  const navigate = useNavigate();
  const [enteredAge, setEnteredAge] = useState(''); // Thay đổi tên state và hàm cập nhật
  const [error, setError] = useState('');

  const handleAgeChange = (event) => {
    setEnteredAge(event.target.value);
  };

  const handleContinueClick = () => {
    // Kiểm tra xem độ tuổi nhập vào có hợp lệ hay không
    const isValidAge = /^[1-9][0-9]*$/.test(enteredAge) && enteredAge >= 12 && enteredAge <= 100;
    if (isValidAge) {
      localStorage.setItem('age', enteredAge);
      navigate('/Gender');
    } else {
      setError('Độ tuổi không hợp lệ. Vui lòng nhập lại.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Nhập Độ Tuổi Của Bạn</h2>
      <div className="mb-4">
        <label htmlFor="age" className="text-lg font-medium">Độ Tuổi:</label>
        <input
          type="number"
          id="age"
          className="border border-gray-500 px-2 py-1 ml-2"
          value={enteredAge}
          onChange={handleAgeChange}
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleContinueClick}
      >
        Tiếp Tục
      </button>
    </div>
  );
}

export default AgeSelection;
