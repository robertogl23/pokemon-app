import axios from "axios";

const API_ENDPOINT = "https://pokeapi.co/api/v2/";

export const axiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
