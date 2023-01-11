import axios from "../axiosConfig";

export const reqQuarters = async (data) => {
  return await axios.post("/api/parent/dashboard/getActivitiesScore", data);
};
