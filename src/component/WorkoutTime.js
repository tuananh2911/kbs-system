import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function WorkoutTime() {
  const navigate = useNavigate();
  const [selectedWorkoutTime, setSelectedWorkoutTime] = useState(null);

  const handleWorkoutTimeSelect = (workoutTime) => {
    setSelectedWorkoutTime(workoutTime);
    sessionStorage.setItem("timeToGym", workoutTime);
    navigate("/goal"); // Chuyển hướng sau khi cập nhật trạng thái
  };

  const times = ["1 giờ", "1 giờ 30 phút", "2 giờ"];

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h2 className="text-3xl font-bold  mb-8">
        Bạn sẵn sàng dành bao nhiêu thời gian cho một buổi tập luyện?
      </h2>
      <div className="w-full max-w-xs mx-auto">
        {times.map((workoutTime) => (
          <button
            key={workoutTime}
            className={`w-full px-4 py-3 mb-4 text-lg font-semibold text-center rounded-lg shadow transition-colors duration-300 ${
              selectedWorkoutTime === workoutTime
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 hover:bg-blue-500 hover:text-white"
            }`}
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
