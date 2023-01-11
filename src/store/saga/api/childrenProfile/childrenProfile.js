import axios from "../axiosConfig";

export const reqGetChildrenProfile = async () => {
  return await axios.get("/api/parent/data/getMyChildren");
};
