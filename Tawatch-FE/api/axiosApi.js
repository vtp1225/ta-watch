import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000", 
});
/*
axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await axios.post("/api/auth/refresh-token", {
          refreshToken: localStorage.getItem("refreshToken"),
        });
        localStorage.setItem("token", res.data.accessToken);
        originalRequest.headers["Authorization"] = `Bearer ${res.data.accessToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        localStorage.clear();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);*/

export default axiosClient;
