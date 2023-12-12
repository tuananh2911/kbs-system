import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Height() {
  const navigate = useNavigate();
  const [height, setHeight] = useState(""); // Thêm state cho chiều cao

  const handleHeightChange = (event) => {
    sessionStorage.setItem("height", event.target.value);
    setHeight(event.target.value);
  };

  const handleOKClick = () => {
    navigate("/weight");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Thêm ô nhập chiều cao và nút OK */}
      <div className="mt-4">
      <h2 className="text-3xl font-bold mb-8">
          Nhập Chiều Cao của bạn:
        </h2>
        <input
          type="number"
          id="height"
          className="bg-slate-900 border border-gray-500 px-2 py-1 ml-2 rounded-lg"
          value={height}
          onChange={handleHeightChange}
          autoComplete="off"
          placeholder="Đơn vị cm"
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 ml-2 rounded-md"
          onClick={handleOKClick}
        >
          Tiếp Tục
        </button>
      </div>
    </div>
  );
}

export default Height;
