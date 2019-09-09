import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:3001/"
    : "https://able-api.infoable.xyz/";
const client = axios.create({
  baseURL
});

export default client;
