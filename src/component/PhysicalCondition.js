import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PhysicalCondition = () => {
  const navigate = useNavigate();
  
  // State cho số lượng mỗi hoạt động
  const [pushUpCount, setPushUpCount] = useState("");
  const [swimmingCount, setSwimmingCount] = useState("");
  const [runningCount, setRunningCount] = useState("");
  const [pullUpCount, setPullUpCount] = useState("");
  const [jumpRopeCount, setJumpRopeCount] = useState("");

  // State cho việc chọn môn thể thao
  const [isPushUpSelected, setIsPushUpSelected] = useState(false);
  const [isSwimmingSelected, setIsSwimmingSelected] = useState(false);
  const [isRunningSelected, setIsRunningSelected] = useState(false);
  const [isPullUpSelected, setIsPullUpSelected] = useState(false);
  const [isJumpRopeSelected, setIsJumpRopeSelected] = useState(false);

  const handleSubmit = () => {
    // Xử lý gửi dữ liệu
    const finalPushUpCount = isPushUpSelected ? pushUpCount : 0;
    const finalSwimmingCount = isSwimmingSelected ? swimmingCount : 0;
    const finalRunningCount = isRunningSelected ? runningCount : 0;
    const finalPullUpCount = isPullUpSelected ? pullUpCount : 0;
    const finalJumpRopeCount = isJumpRopeSelected ? jumpRopeCount : 0;

    sessionStorage.setItem("numberPushUp", finalPushUpCount);
    sessionStorage.setItem("numberSwimming", finalSwimmingCount);
    sessionStorage.setItem("numberRunning", finalRunningCount);
    sessionStorage.setItem("numberPullUp", finalPullUpCount);
    sessionStorage.setItem("numberJumpRope", finalJumpRopeCount);

    navigate("/workout-time", { state: { finalPushUpCount, finalSwimmingCount, finalRunningCount, finalPullUpCount, finalJumpRopeCount } });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen  p-4">
      <h2 className="text-3xl font-bold mb-2 ">Hãy tự đánh giá khả năng hoạt động thể chất hiện tại của bạn đối với mỗi bài tập sau: </h2>
      <h2 className="text-3xl font-bold mb-16">( Hoạt động liên tục không nghỉ)</h2>
      <h2 className="mb-4">Lưu ý: Nếu không chắc chắn thì có thể bỏ qua. Hãy cung cấp thông tin chính xác nhất có thể để hệ thống của chúng tôi tư vấn một cách chính xác hơn.</h2>

      <ActivityInput
        label="Hít Đất"
        selected={isPushUpSelected}
        setSelected={setIsPushUpSelected}
        value={pushUpCount}
        setValue={setPushUpCount}
        placeholder="Số lần"
      />

      <ActivityInput
        label="Bơi Lội"
        selected={isSwimmingSelected}
        setSelected={setIsSwimmingSelected}
        value={swimmingCount}
        setValue={setSwimmingCount}
        placeholder="Số mét"
      />

      <ActivityInput
        label="Chạy Bộ"
        selected={isRunningSelected}
        setSelected={setIsRunningSelected}
        value={runningCount}
        setValue={setRunningCount}
        placeholder="Khoảng cách (km)"
      />

      <ActivityInput
        label="Hít Xà"
        selected={isPullUpSelected}
        setSelected={setIsPullUpSelected}
        value={pullUpCount}
        setValue={setPullUpCount}
        placeholder="Số lần"
      />

      <ActivityInput
        label="Nhảy Dây"
        selected={isJumpRopeSelected}
        setSelected={setIsJumpRopeSelected}
        value={jumpRopeCount}
        setValue={setJumpRopeCount}
        placeholder="Số lần"
      />

      <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4">
        Xác Nhận
      </button>
    </div>
  );
};

const ActivityInput = ({ label, selected, setSelected, value, setValue, placeholder }) => {
  return (
    <div className="activity-section mb-4">
      <label className="flex items-center mb-2">
        <input type="checkbox" checked={selected} onChange={() => setSelected(!selected)} className="mr-2 rounded-lg" />
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`input-style bg-slate-900 w-full px-4 py-2 border rounded-lg ${selected ? 'border-gray-400' : 'border-gray-300 bg-gray-200 text-gray-500 cursor-not-allowed'}`}
        placeholder={placeholder}
        disabled={!selected}
      />
    </div>
  );
};

export default PhysicalCondition;
