import axios from "axios";
import { BaseURL } from "./config";

const axiosInstance = axios.create({
  baseURL: BaseURL,
});

export default axiosInstance;
