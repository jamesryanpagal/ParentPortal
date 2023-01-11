import axios from "../axiosConfig";

export const reqUpdateUsersDetails = async (data) => {
  return await axios.post("/api/parent/profile/updateProfile", data);
};
