import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AgeSelection() {
  const navigate = useNavigate();
  const [enteredAge, setEnteredAge] = useState(""); // Thay đổi tên state và hàm cập nhật
  const [error, setError] = useState("");

  const handleAgeChange = (event) => {
    setEnteredAge(event.target.value);
  };

  const handleContinueClick = () => {
    // Kiểm tra xem độ tuổi nhập vào có hợp lệ hay không
    const isValidAge =
      /^[1-9][0-9]*$/.test(enteredAge) && enteredAge >= 12 && enteredAge <= 100;
    if (isValidAge) {
      sessionStorage.setItem("age", enteredAge);
      navigate("/gender");
    } else {
      setError("Độ tuổi không hợp lệ. Vui lòng nhập lại.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-8">Nhập Độ Tuổi Của Bạn</h2>
      <div className="mb-4">
        <label htmlFor="age" className="text-lg font-medium">
          Độ Tuổi:
        </label>
        <input
          type="number"
          id="age"
          className="bg-slate-900 border border-gray-500 px-2 py-1 ml-2 rounded-lg"
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
