import axios from "axios";

export const client = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_BASE_URL,
});
