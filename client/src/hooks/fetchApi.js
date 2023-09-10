import axios from "axios";

export const fetchApi = axios.create({
  // @ts-ignore
  baseURL: import.meta.env.VITE_API_URL,
  // headers: {
  //   Authorization: "Bearer" + import.meta.env.VITE_API_TOKEN,
  // },
});
