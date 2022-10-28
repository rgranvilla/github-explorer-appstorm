import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export { axiosClient };
