import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "https://leetlab-production-5d58.up.railway.app/api/v1",
  withCredentials: true,
});
