import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_ARTICLE_API_BASE_URL,
});

export default axiosInstance;
