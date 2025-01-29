const restaurantsUrl = 'http://localhost:3000/restaurant'; 

export const fetchRestaurants = async () => {
  try {
    const response = await fetch(`${restaurantsUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("data:", data);
      return data;
    } else {
      throw new Error("Failed to fetch restaurants");
    }
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
};