import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GenderSelect() {
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    localStorage.setItem('gender', gender);
    navigate('/Height'); // Chuyển hướng sau khi cập nhật trạng thái
  };

  const genders = ["Nam", "Nữ", "Khác"];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Bạn thuộc giới tính nào?</h2>
      <div className="w-full max-w-xs mx-auto">
        {genders.map((gender) => (
          <button
            key={gender}
            className={`w-full px-4 py-3 mb-4 text-lg font-semibold text-center rounded-lg shadow transition-colors duration-300 ${
              selectedGender === gender ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-500 hover:text-white'
            }`}
            onClick={() => handleGenderSelect(gender)}
          >
            {gender}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenderSelect;
