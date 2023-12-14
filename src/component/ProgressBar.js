// ProgressBar.js
import React from "react";
import { useLocation } from "react-router-dom";

const ProgressBar = () => {
  const location = useLocation();

  // Define the order of the routes
  const routeOrder = [
    "/",
    "/gender",
    "/height",
    "/weight",

    "/target-weight",
    "/level-fitness-selection",
    "/physical-condition",
    "/workout-time",
    "/goal",
    "/number-exercise",
    "/summary",
  ];

  // Determine the current index
  const currentIndex = routeOrder.indexOf(location.pathname);

  // Calculate the width of the progress bar
  const progressWidth = ((currentIndex + 1) / (routeOrder.length + 0)) * 100;

  return (
    <div className="w-full bg-gray-200 h-2 ">
      <div
        className="bg-blue-500 h-2"
        style={{ width: `${progressWidth}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
