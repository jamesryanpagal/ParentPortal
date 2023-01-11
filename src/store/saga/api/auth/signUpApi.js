import axios from "../axiosConfig";

export const reqSignUp = async (payload) => {
  return await axios.post("/api/parent/auth/register", payload);
};
