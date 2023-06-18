import axios from "axios";

export const api = axios.create({
  baseURL:"https://foodexplorer-api-mi7k.onrender.com"
});