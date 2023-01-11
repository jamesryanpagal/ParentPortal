import axios from "../axiosConfig";

export const reqSubjects = async (data) => {
  return await axios.post("/api/parent/data/getSubjects", data);
};
