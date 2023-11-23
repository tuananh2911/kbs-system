async function getInfoGymMode(userGymData) {
  try {
    const response = await fetch("http://localhost:5000/app/gym-mode", {
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
    console.log("Response data:", data);
    // Xử lý dữ liệu phản hồi tại đây
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
export default getInfoGymMode