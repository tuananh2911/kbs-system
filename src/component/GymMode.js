import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getInfoGymMode } from "../utils/getInfoGymMode";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const breakfastMeals = [
  "Thịt gà nướng (150g), Rau xà lách (100g), Bánh mì nguyên cám (100g)",
  "Trứng ốp la (120g), Cà chua (150g), Bánh mì nướng (100g)",
  "Súc xích (100g), Rau cải bó xôi (100g), Yến mạch (50g)",
  "Thịt lợn nướng (150g), Rau cải thìa (100g), Khoai lang (150g)",
  "Bánh pancake protein (200g), Quả mâm xôi (100g), Mật ong (30g)",
  "Bánh mì nướng (100g), Bơ nghiền (50g), Quả bơ (100g)",
  "Bánh ngô nướng (100g), Mật ong (30g), Sữa chua Hy Lạp (100g)"
];

const lunchMeals = [
  "Cá ngừ (200g), Rau xanh (100g), Cà chua bi (100g)",
  "Súp bí ngô (250g), Đậu đen (100g), Bánh mì ngũ cốc (100g)",
  "Thịt bò xào (200g), Rau cải bắp(200g), Đậu phụ chiên giòn (100g)",
  "Cơm tấm (200g), Cá hấp (150g), Rau luộc (100g)",
  "Salad gà (150g), Hạt quinoa (100g), Rau xanh (100g)",
  "Pizza healthy đế bánh bông cải (200g), Phô mai mozzarella (50g), Rau củ (100g)",
  "Sushi cá hồi (200g), Rau củ (100g)"
];

const dinnerMeals = [
  "Thịt gà nướng (200g), Khoai lang (150g), Bông cải xanh (100g)",
  "Cá hồi áp chảo (200g), Quinoa (100g), Rau củ xào (150g)",
  "Thịt bò xào (200g), Rau củ (150g), Mì gạo (100g)",
  "Súp lơ xanh (150g), Thịt gà (150g), Phô mai ít béo (50g)",
  "Pizza healthy đế bánh bông cải (200g), Phô mai mozzarella (50g), Rau củ (100g)",
  "Cá hồi nướng (200g), Măng tây (100g), Gạo lứt (100g)",
  "Súp miso (200g), Đậu phụ non (100g), Rong biển (50g)"
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
  { day: "Buổi 1", exercises: ["Tên bài tập: SEATED MACHINE REAR LATERAL RAISE Số set tập: 10 Số rep: 15 Thời gian 20.0 phút Loại bài tập: Cổ và vai (Neck & Shoulders 3 Group)", "Tên bài tập: DUMBBELL REAR LATERAL RAISE Số set tập: 10 Số rep: 6 Thời gian 10.0 phút Loại bài tập: Cổ và vai (Neck & Shoulders 3 Group)", "Tên bài tập: Dumbbell pull-over Số set tập: 10 Số rep: 12 Thời gian 10.0 phút Loại bài tập: Lưng (Back group)","Tên bài tập: Butterfly Press Số set tập: 10 Số rep: 12 Thời gian 10.0 phút Loại bài tập: Ngực (Chest)"] },
  { day: "Buổi 2", exercises: ["Tên bài tập: LYING LEG RAISE Số set tập: 7 Số rep: 15 Thời gian 14.0 phút Loại bài tập: Bụng và lưng dưới (Abdomen & Lower Back Group)","Tên bài tập: LATERAL CRUNCH Số set tập: 7 Số rep: 10 Thời gian 14.0 phút Loại bài tập: Bụng và lưng dưới (Abdomen & Lower Back Group)","Tên bài tập: 45º CALF PRESS Số set tập: 7 Số rep: 15 Thời gian 14.0 phút Loại bài tập: Chân (Leags Group)","Tên bài tập: BICEPS PULL-UPS Số set tập: 7 Số rep: 10 Thời gian 7.0 phút Loại bài tập: Bắp tay (Biceps group)"] },
  { day: "Buổi 3",exercises: ["Tên bài tập: One-handed Lateral Barbell Lift Số set tập: 7 Số rep: 10 Thời gian 21.0 phút Loại bài tập: Ngực (Chest)","Tên bài tập: LYING NECK EXTENSION Số set tập: 7 Số rep: 15 Thời gian 14.0 phút Loại bài tập: Cổ và vai (Neck & Shoulders 3 Group)","Tên bài tập: BARBELL SEATED CALF RAISE Số set tập: 7 Số rep: 10 Thời gian 14.0 phút Loại bài tập: Chân (Leags Group)","Tên bài tập: DUMBBELL OVERHEAD TRICEPS EXTENSION Số set tập: 7 Số rep: 15 Thời gian 14.0 phút Loại bài tập: Bắp tay sau (Triceps group)"] },
  // ... thêm các ngày khác
];
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  borderRadius: "10px",
  background: isDragging ? "lightgreen" : "lightblue",
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "white",
  padding: grid,
  width: 250,
  borderRadius: "10px",
  border: "1px solid #ccc"
});

function GymMode() {
  const location = useLocation();
  const [caloToMaintain, setCaloToMaintain] = useState(0);
  const [caloToReachGoal, setCaloToReachGoal] = useState(0);
  const [timeToReachGoal, setTimeToReachGoal] = useState(0);
  const [mealBreakfast, setMealBreakfast] = useState(0);
  const [mealLunch, setMealLunch] = useState(0);
  const [mealDinner, setMealDinner] = useState(0);
  const mealPlan = daysOfTheWeek.map((day, index) => ({
    day: day,
    meals: [
      breakfastMeals[Math.floor(Math.random() * breakfastMeals.length)],
      lunchMeals[Math.floor(Math.random() * lunchMeals.length)],
      dinnerMeals[Math.floor(Math.random() * dinnerMeals.length)],
    ],
  }));
  const handleMealPlanChange = () => {
    setIsOpenModal(true);
  };
  const handleWorkoutPlanChange = () => {};
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
      numberSwimming: sessionStorage.setItem("numberSwimming"),
      numberRunning: sessionStorage.setItem("numberRunning"),
      numberPullUp: sessionStorage.setItem("numberPullUp"),
      numberJumpRope: sessionStorage.setItem("numberJumpRope"),
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
  const [selectedMuscleGroups, setSelectedMuscleGroups] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const muscleGroups = ["Ngực", "Lưng", "Chân", "Bắp tay", "Vai"];
  const handleMuscleGroupSelect = (muscleGroup) => {
    if (selectedMuscleGroups.includes(muscleGroup)) {
      // Nếu lựa chọn đã được chọn trước đó, hủy chọn nó
      setSelectedMuscleGroups(
        selectedMuscleGroups.filter((group) => group !== muscleGroup)
      );
    } else {
      // Nếu lựa chọn chưa được chọn, thêm nó vào danh sách
      setSelectedMuscleGroups([...selectedMuscleGroups, muscleGroup]);
    }
  };
  const [isEditingMuscleGroups, setIsEditingMuscleGroups] = useState(false);
  const handleEditMuscleGroups = () => {
    setIsEditingMuscleGroups(!isEditingMuscleGroups);
  };
  const handleMealOrderChange = (newOrder) => {
    setMealOrder(newOrder);
  };
  const [mealOrder, setMealOrder] = useState([{
    id: 1,
    name: "Carb",
  },
  {
    id: 2,
    name: "Protein",
  },
  {
    id: 3,
    name: "Vegetable",
  }
]);
  const [isEditingMeals, setIsEditingMeals] = useState(false);

  const handleEditMeals = () => {
    setIsEditingMeals(!isEditingMeals);
  };

  // const onDragEnd = (result) => {
  //   if (!result.destination) return;
  //   const items = Array.from(mealOrder);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);
  //   setMealOrder(items);
  // };

  const handleSubmit = async () => {
    // Gửi dữ liệu thứ tự mới của mealOrder lên server
    console.log("Thứ tự mới: ", mealOrder);
    try{
      const body = mealOrder.map((item) => item.name)
      console.log(body)
      // fetch("http:app/gym-mode", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(body),
      // });
  
      // const res = await sendApi(body)
    }catch(error){

    }
    // Đặt lại trạng thái isEditingMeals
    setIsOpenModal(false);
  };
  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      mealOrder,
      result.source.index,
      result.destination.index
    );
    setMealOrder(items);
  }
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
        <button
          onClick={handleMealPlanChange}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Thay Đổi thực đơn
        </button>
      </div>
      <Dialog open = {isOpenModal} onClose={() => setIsOpenModal(false)}>
        <DialogTitle>Sắp xếp thành phần dinh dưỡng</DialogTitle>
        <DialogContent dividers>
        <DragDropContext onDragEnd={onDragEnd} >
          <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.draggableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {mealOrder.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.name}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
          </Droppable>
        </DragDropContext>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setIsOpenModal(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>OK</Button>
        </DialogActions>
      </Dialog>
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
        {isEditingMuscleGroups ? (
          <div>
            <h3 className="font-semibold text-lg mb-2">Chọn nhóm cơ</h3>
            {muscleGroups.map((muscleGroup, index) => (
              <div key={index} className="mb-2">
                <input
                  type="checkbox"
                  id={`muscle-group-${index}`}
                  value={muscleGroup}
                  onChange={() => handleMuscleGroupSelect(muscleGroup)}
                  checked={selectedMuscleGroups.includes(muscleGroup)}
                />
                <label htmlFor={`muscle-group-${index}`}>{muscleGroup}</label>
              </div>
            ))}
          </div>
        ) : (
          <button
            onClick={handleEditMuscleGroups}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Thay đổi bài tập
          </button>
        )}
        {isEditingMuscleGroups && (
          <button
            onClick={handleWorkoutPlanChange}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default GymMode;