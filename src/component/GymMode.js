import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  getInfoGymMode,
  getInfoExercise,
  getInfoNutrition,
} from "../utils/getInfoGymMode";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const workoutPlan = [];
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
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "white",
  padding: grid,
  width: 250,
  borderRadius: "10px",
  border: "1px solid #ccc",
});

function GymMode() {
  const location = useLocation();
  const [userData, setUserData] = useState({
    age: parseInt(sessionStorage.getItem("age")),
    currentWeight: parseInt(sessionStorage.getItem("currentWeight")),
    goalWeight: parseInt(sessionStorage.getItem("goalWeight")),
    gender: sessionStorage.getItem("gender"),
    height: parseInt(sessionStorage.getItem("height")),
    frequentlyGym: parseInt(sessionStorage.getItem("frequentlyGym")),
    numberPushUp: parseInt(sessionStorage.getItem("numberPushUp")),
    timeToGym: parseInt(sessionStorage.getItem("timeToGym")),
    goalSelect: sessionStorage.getItem("goal"),
    workoutDuration: sessionStorage.getItem("workoutDuration"),
    numberSwimming: parseInt(sessionStorage.getItem("numberSwimming")),
    numberRunning: parseInt(sessionStorage.getItem("numberRunning")),
    numberPullUp: parseInt(sessionStorage.getItem("numberPullUp")),
    numberJumpRope: parseInt(sessionStorage.getItem("numberJumpRope")),
    numberExercise: parseInt(sessionStorage.getItem("numberExercise")),
  });
  const [caloToMaintain, setCaloToMaintain] = useState(1255);
  const [caloToReachGoal, setCaloToReachGoal] = useState(1100);
  const [timeToReachGoal, setTimeToReachGoal] = useState(21);
  const [userGymData, setUserGymData] = useState({});
  const [mealBreakfast, setMealBreakfast] = useState(0);
  const [mealLunch, setMealLunch] = useState(0);
  const [mealDinner, setMealDinner] = useState(0);
  const [workoutPlan, setWorkoutPlan] = useState([]);
  const [mealPlan, setMealPlan] = useState([]);
  const daysOfTheWeek = [
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
    "Chủ Nhật",
  ];

  useEffect(() => {
    const fetchData = async () => {
      const gymModeData = await getInfoGymMode(userData);
      if (gymModeData) {
        setCaloToMaintain(gymModeData.caloToMaintain);
        setCaloToReachGoal(gymModeData.caloToReachGoal);
        setTimeToReachGoal(gymModeData.timeToReachGoal);
      }
    };

    fetchData();
  }, [userData]);

  // Fetch meal plan data
  useEffect(() => {
    const fetchMealData = async () => {
      const mealData = await getInfoNutrition(userData);
      if (mealData) {
        setMealPlan(mealData);
      }
    };

    fetchMealData();
  }, [userData]);

  // Fetch workout plan data
  useEffect(() => {
    const fetchWorkoutData = async () => {
      const workoutData = await getInfoExercise(userData);
      if (workoutData) {
        setWorkoutPlan(workoutData);
      }
    };

    fetchWorkoutData();
  }, [userData]);

  const handleMealPlanChange = () => {
    setIsOpenModal(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      // Gọi API để lấy dữ liệu
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
  }, [userData]);
  const [selectedMuscleGroups, setSelectedMuscleGroups] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const muscleGroups = [
    "Ngực (Chest)",
    "Lưng (Back group)",
    "Cổ và vai (Neck & Shoulders 3 Group)",
    "Bắp tay (Biceps group)",
    "Cẳng tay (Foream Group)",
    "Chân (Leags Group)",
    "Bụng và lưng dưới (Abdomen & Lower Back Group)",
  ];
  const handleMuscleGroupSelect = (muscleGroup) => {
    const newSelectedMuscleGroups = selectedMuscleGroups.includes(muscleGroup)
      ? selectedMuscleGroups.filter((group) => group !== muscleGroup)
      : [...selectedMuscleGroups, muscleGroup];

    setSelectedMuscleGroups(newSelectedMuscleGroups);
    console.log(
      "Selected Muscle Groups after update:",
      newSelectedMuscleGroups
    );
  };

  // Ensure you're passing the right state to the API
  const updateWorkoutPlan = async () => {
    console.log("Selected Exercises for API call:", selectedMuscleGroups);
    try {
      const newWorkoutData = await getInfoExercise({
        ...userData,
        muscle: selectedMuscleGroups,
      });
      // rest of your code
    } catch (error) {
      // error handling
    }
  };
  const [isEditingMuscleGroups, setIsEditingMuscleGroups] = useState(false);
  const handleEditMuscleGroups = () => {
    setIsEditingMuscleGroups(!isEditingMuscleGroups);
  };
  const handleMealOrderChange = (newOrder) => {
    setMealOrder(newOrder);
  };
  const [mealOrder, setMealOrder] = useState([
    {
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
    },
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

  const calculatePercentages = () => {
    const percentages = [0.5, 0.3, 0.2];
    const newPercentages = {};
    console.log("meal", mealOrder);
    mealOrder.forEach((item, index) => {
      newPercentages[`percent${item.name}`] = percentages[index];
    });
    return newPercentages;
  };
  const [selectedExercises, setSelectedExercises] = useState([]);

  // Modify the handleMuscleGroupSelect function

  // Function to call getExercise API and update workout plan
  // const updateWorkoutPlan = async () => {
  //   try {
  //     const newWorkoutData = await getInfoExercise({
  //       ...userData,
  //       exercises: selectedExercises,
  //     });
  //     if (newWorkoutData) {
  //       setWorkoutPlan(newWorkoutData);
  //     }
  //   } catch (error) {
  //     console.error("Error calling getExercise API:", error);
  //   }
  // };

  // Modify the handleWorkoutPlanChange function to call updateWorkoutPlan
  const handleWorkoutPlanChange = () => {
    updateWorkoutPlan();
    setIsEditingMuscleGroups(false); // Close the editing mode after submission
  };
  // Hàm xử lý khi người dùng nhấn submit
  const handleSubmit = async () => {
    // Tính toán phần trăm mới
    const newPercentages = calculatePercentages();

    // Tạo đối tượng request mới với phần trăm mới
    const newRequest = {
      ...userData, // Giả sử userData chứa dữ liệu người dùng hiện tại
      ...newPercentages, // Gộp phần trăm mới vào
    };

    // Gọi API getNutrition với đối tượng request mới
    try {
      const newMealData = await getInfoNutrition(newRequest);
      if (newMealData) {
        setMealPlan(newMealData);
      }
    } catch (error) {
      console.error("Lỗi khi gọi API getInfoNutrition:", error);
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
  };
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
          <span className="font-semibold">{timeToReachGoal} ngày</span>
        </p>
      </div>

      <div className="bg-slate-800 shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Chế Độ Ăn Khuyến Nghị Cho Bạn
        </h2>
        {mealPlan.map((dayPlan, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-lg mb-2">
              {daysOfTheWeek[index]}
            </h3>
            <p>Bữa sáng: {dayPlan.mealBreakfast}</p>
            <p>Bữa trưa: {dayPlan.mealLunch}</p>
            <p>Bữa tối: {dayPlan.mealDinner}</p>
          </div>
        ))}
        <button
          onClick={handleMealPlanChange}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Thay đổi thực đơn
        </button>
      </div>
      <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <DialogTitle>Sắp xếp thành phần dinh dưỡng</DialogTitle>
        <DialogContent dividers>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {mealOrder.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id.toString()}
                      index={index}
                    >
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
          <Button variant="outlined" onClick={() => setIsOpenModal(false)}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            OK
          </Button>
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
