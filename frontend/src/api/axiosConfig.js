import axios from "axios";

const api = axios.create({
  baseURL: "", // <-- Phải để trống như thế này
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;