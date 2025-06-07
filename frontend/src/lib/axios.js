import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "leetlab-production.up.railway.app/api/v1",
  withCredentials: true,
});
