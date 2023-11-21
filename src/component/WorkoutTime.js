// WorkoutTime.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/WorkoutTime.css';

function WorkoutTime() {
  const navigate = useNavigate();
  const [selectedWorkoutTime, setSelectedWorkoutTime] = useState(null);

  const handleWorkoutTimeSelect = (workoutTime) => {
    setSelectedWorkoutTime(workoutTime);
    navigate('/TimePrepareMeal'); // Chuyển hướng sau khi cập nhật trạng thái
  };

  const times = ["30 phút", "1 giờ", "1 giờ 30 phút", "Hãy để chúng tôi quyết định"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Bạn sẵn sàng dành bao nhiêu thời gian cho một buổi tập luyện?</h2>
      <div className="grid grid-cols-2 gap-4">
        {times.map((workoutTime) => (
          <button
            key={workoutTime}
            className={`custom-button ${selectedWorkoutTime === workoutTime ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => handleWorkoutTimeSelect(workoutTime)}
          >
            {workoutTime}
          </button>
        ))}
      </div>
    </div>
  );
}

export default WorkoutTime;
