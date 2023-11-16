import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function WorkoutIssueSelection() {
  const navigate = useNavigate();
  const [selectedWorkoutIssue, setSelectedWorkoutIssue] = useState(null);

  const handleWorkoutIssueSelect = (WorkoutIssue) => {
    setSelectedWorkoutIssue(WorkoutIssue);
    navigate('/workout-issues'); // Chuyển hướng sau khi cập nhật trạng thái
  };

  const WorkoutIssues = ["Thiếu động lực", "Không có kế hoạch rõ ràng", "Việc tập luyện của tôi quá vất vả", "Huấn luyện tệ","Không có cái nào ở trên"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Chọn Độ Tuổi Của Bạn</h2>
      <div className="grid grid-cols-2 gap-4">
        {WorkoutIssues.map((WorkoutIssue) => (
          <button
            key={WorkoutIssue}
            className={`px-4 py-2 rounded-md text-white font-medium ${selectedWorkoutIssue === WorkoutIssue ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => handleWorkoutIssueSelect(WorkoutIssue)} // Sử dụng handleAgeSelect ở đây
          >
            {WorkoutIssue}
          </button>
        ))}
      </div>
    </div>
  );
}


export default WorkoutIssueSelection;
