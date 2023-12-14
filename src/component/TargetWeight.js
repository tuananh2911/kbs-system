import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TargetWeight() {
  const navigate = useNavigate();
  const [TargetWeight, setTargetWeight] = useState(null);

  const handleTargetWeightChange = (event) => {
    sessionStorage.setItem("goalWeight", parseInt(event.target.value));
    setTargetWeight(event.target.value);
  };
  const handleOKClick = () => {
    // Thực hiện các xử lý cần thiết

    navigate("/level-fitness-selection");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mt-4">
        <h2 className="text-3xl font-bold mb-8">
          Nhập mục tiêu cân nặng của bạn:
        </h2>
        <div className="flex flex-row items-center justify-center" >
          <input
            type="number"
            id="TargetWeight"
            className="bg-slate-900 border border-gray-500 px-2 py-1 ml-2 rounded-lg"
            value={TargetWeight}
            onChange={handleTargetWeightChange}
            autoComplete="off"
            placeholder="Đơn vị kg"
          />
          <button
            className="bg-blue-500 text-white px-4 py-1 ml-2 rounded-md"
            onClick={handleOKClick}
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
}

export default TargetWeight;
