// api/editApi.js
import axios from "axios";

export const saveEventApi = (eventData) => {
  console.log(eventData);
  return axios.post("http://localhost:3000/api/event", eventData);
};
