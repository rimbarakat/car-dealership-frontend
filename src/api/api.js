import axios from "axios";
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});
api.interceptors.response.use((response) => {
  if (response.status === 401) {
    // redirect to login page
  }
  return response;
});
console.log(process.env.REACT_APP_API_URL);
export default api;
