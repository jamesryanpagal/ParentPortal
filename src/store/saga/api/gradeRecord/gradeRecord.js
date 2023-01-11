import axios from "../axiosConfig";

export const reqGradeRecords = async (data) => {
  return await axios.post("/api/parent/data/getScores", data);
};
