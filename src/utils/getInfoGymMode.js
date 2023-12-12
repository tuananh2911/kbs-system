async function getInfoGymMode(userGymData) {
  try {
    const response = await fetch("http://103.77.246.226:5001/app/gym-mode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userGymData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
    // Xử lý dữ liệu phản hồi tại đây
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
export {getInfoGymMode}