import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Weight() {
  const navigate = useNavigate();
  const [weight, setWeight] = useState("");

  const handleWeightChange = (event) => {
    sessionStorage.setItem("currentWeight", parseInt(event.target.value));
    setWeight(event.target.value);
  };

  const handleOKClick = () => {
    // Thực hiện các xử lý cần thiết với chiều cao (ví dụ: kiểm tra hợp lệ)
    navigate("/target-weight");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mt-4 ">
      <h2 className="text-3xl font-bold mb-8">
          Nhập cân nặng của bạn:
        </h2>
        <input
          type="number"
          id="weight"
          className="bg-slate-900 border border-gray-500 px-2 py-1 ml-2 rounded-lg"
          value={weight}
          onChange={handleWeightChange}
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
  );
}

export default Weight;
