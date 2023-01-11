import axios from "../axiosConfig";

export const reqUserProfile = async () => {
  return await axios.get("/api/parent/profile/getProfile");
};
