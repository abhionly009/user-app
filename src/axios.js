import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.225.40:8089/api/",
});

export default instance;
