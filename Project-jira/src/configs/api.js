import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants/api";

const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
  },
});

export { request };
