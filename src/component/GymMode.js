import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getInfoGymMode } from "../utils/getInfoGymMode";
function GymMode() {
  const breakfastMeals = [
    "Bánh yến mạch với sữa tươi và trái cây cắt nhỏ",
    "Trứng ốp la với bánh mì nguyên cám và rau xà lách",
    "Sinh tố chuối, bơ, rau xanh và sữa hạnh nhân",
    "Bánh kếp yến mạch với quả mọng và mật ong",
    "Bánh pancake protein với si rô không đường và trái cây",
    "Bánh mì nướng với bơ nghiền và quả bơ",
    "Bánh ngô nướng với mật ong và sữa chua Hy Lạp",
  ];
  const lunchMeals = [
    "Salad cá ngừ với rau xanh, cà chua bi và nước sốt mù tạt chanh",
    "Súp bí ngô với đậu đen và bánh mì ngũ cốc",
    "Gỏi cuốn rau củ với đậu phụ chiên giòn",
    "Cơm tấm với cá hấp và rau luộc",
    "Salad gà với hạt quinoa và nước sốt balsamic",
    "Pizza healthy đế bánh bông cải với topping rau củ và phô mai mozzarella",
    "Sushi cá hồi và rau củ",
  ];
  const dinnerMeals = [
    "Thịt gà nướng với khoai lang luộc và bông cải xanh",
    "Cá hồi áp chảo với quinoa và rau củ xào",
    "Món xào thập cẩm với thịt bò, rau củ và mì gạo",
    "Súp lơ xanh với thịt gà và phô mai ít béo",
    "Pizza healthy đế bánh bông cải với topping rau củ và phô mai mozzarella",
    "Món cá hồi nướng với măng tây và gạo lứt",
    "Món súp miso với đậu phụ non và rong biển",
  ];
  const daysOfTheWeek = [
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
    "Chủ Nhật",
  ];
  const workoutPlan = [
    { day: "Thứ Hai", exercises: ["Bài tập cardio 30 phút", "Tập tạ chân"] },
    { day: "Thứ Ba", exercises: ["Yoga", "Tập cơ bụng"] },
    // ... thêm các ngày khác
  ];
  const location = useLocation();
  const [caloToMaintain, setCaloToMaintain] = useState(0);
  const [caloToReachGoal, setCaloToReachGoal] = useState(0);
  const [timeToReachGoal, setTimeToReachGoal] = useState(0);
  const [mealBreakfast, setMealBreakfast] = useState(0);
  const [mealLunch, setMealLunch] = useState(0);
  const [mealDinner, setMealDinner] = useState(0);
  const mealPlan = [
    {
      day: daysOfTheWeek[0],
      meals: [
        breakfastMeals[Math.floor(Math.random() * breakfastMeals.length)],
        lunchMeals[Math.floor(Math.random() * lunchMeals.length)],
        dinnerMeals[Math.floor(Math.random() * dinnerMeals.length)],
      ],
    },
    // ...
  ];
  const fetchData = async () => {
    // Gọi API để lấy dữ liệu
    const userGymData = {
      age: sessionStorage.getItem("age"),
      currentWeight: sessionStorage.getItem("currentWeight"),
      goalWeight: sessionStorage.getItem("goalWeight"),
      gender: sessionStorage.getItem("gender"),
      height: sessionStorage.getItem("height"),
      frequentlyGym: parseInt(sessionStorage.getItem("frequentlyGym")),
      numberPushUp: sessionStorage.getItem("numberPushUp"),
      timeToGym: sessionStorage.getItem("timeToGym"),
      goalSelect: sessionStorage.getItem("goal"),
      workoutDuration: sessionStorage.getItem("workoutDuration"),
      numberSwimming:sessionStorage.setItem("numberSwimming"),
      numberRunning:sessionStorage.setItem("numberRunning"),
      numberPullUp:sessionStorage.setItem("numberPullUp"),
      numberJumpRope:sessionStorage.setItem("numberJumpRope"),
    };
    const data = await getInfoGymMode(userGymData); // Gọi API và lấy dữ liệu

    // Xử lý dữ liệu trả về từ API
    const {
      caloToMaintain,
      caloToReachGoal,
      timeToReachGoal,
      mealBreakfast,
      mealLunch,
      mealDinner,
    } = data;

    // Cập nhật các biến state
    setCaloToMaintain(caloToMaintain);
    setCaloToReachGoal(caloToReachGoal);
    setTimeToReachGoal(timeToReachGoal);
    setMealBreakfast(mealBreakfast);
    setMealLunch(mealLunch);
    setMealDinner(mealDinner);
  };

  useEffect(() => {
    // Gọi hàm gọi API
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold text-center mb-6">
        Chế Độ Dinh Dưỡng Của Bạn
      </h1>

      <div className="bg-slate-800 shadow-md rounded-lg p-6 mb-6 mt-40">
        <h2 className="text-xl font-semibold mb-4">Thông Tin Calo</h2>
        <p>
          Calo để giữ dáng:{" "}
          <span className="font-semibold">{caloToMaintain} calo/ngày</span>
        </p>
        <p>
          Calo để đạt mục tiêu:{" "}
          <span className="font-semibold">{caloToReachGoal} calo/ngày</span>
        </p>
        <p>
          Thời gian dự kiến để đạt mục tiêu:{" "}
          <span className="font-semibold">{timeToReachGoal}</span>
        </p>
      </div>

      <div className="bg-slate-800  shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Chế Độ Ăn Khuyến Nghị Cho Bạn
        </h2>
        {mealPlan.map((dayPlan, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-lg mb-2">{dayPlan.day}</h3>
            <ul className="list-disc pl-5">
              {dayPlan.meals.map((meal, mealIndex) => (
                <li key={mealIndex}>{meal}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-slate-800 shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Chế Độ Tập Luyện Của Bạn</h2>
      {workoutPlan.map((dayPlan, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold text-lg mb-2">{dayPlan.day}</h3>
          <ul className="list-disc pl-5">
            {dayPlan.exercises.map((exercise, exerciseIndex) => (
              <li key={exerciseIndex}>{exercise}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
}

export default GymMode;
