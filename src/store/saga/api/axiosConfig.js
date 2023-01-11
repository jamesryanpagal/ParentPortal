import axios from "axios";
import { getAuthToken } from "../../../helpers/getUser";

export const BASE_URL = "https://demo.schoolbook.ph:9000";
export default axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${getAuthToken("persist:userAuth")}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const axiosMultipart = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});

// axios.interceptors.request.use(async function (config) {
//   config.headers["Authorization"] = `Bearer ${getAuthToken(
//     "persist:authParent"
//   )}`;
//   return config;
// });
