// api/editApi.js
import axios from "axios";

export const saveEventApi = (eventData) => {
  console.log(eventData);
  return axios.post("http://localhost:3000/api/event", eventData);
};

export const fetchCategoryID = async () => {
  try {
    // Make a GET request to fetch category IDs from the API
    const response = await axios.get("http://localhost:3000/api/category");
    // Extract category IDs from the response data and return them
    return response.data.id;
  } catch (error) {
    // Handle errors if any
    console.error("Error fetching category IDs:", error);
    throw error; // Rethrow the error to be caught by the caller
  }
};
