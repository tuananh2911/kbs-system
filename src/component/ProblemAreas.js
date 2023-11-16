import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function ProblemAreaSelection() {
  const navigate = useNavigate();
  const [selectedProblemArea, setSelectedProblemAreas] = useState(null);

  const handleProblemAreaSelect = (problemArea) => {
    setSelectedProblemAreas(problemArea);
    navigate('/problem-areas'); // Chuyển hướng sau khi cập nhật trạng thái
  };

  const problemAreas = ["Ngực yếu", "Cánh tay mảnh khảnh", "Bụng bia", "Đôi chân mảnh khảnh"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Chọn Độ Tuổi Của Bạn</h2>
      <div className="grid grid-cols-2 gap-4">
        {problemAreas.map((problemArea) => (
          <button
            key={problemArea}
            className={`px-4 py-2 rounded-md text-white font-medium ${selectedProblemArea === problemArea ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => handleProblemAreaSelect(problemArea)} // Sử dụng handleAgeSelect ở đây
          >
            {problemArea}
          </button>
        ))}
      </div>
    </div>
  );
}


export default ProblemAreaSelection;
