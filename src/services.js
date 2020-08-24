import axios from "axios";
// import store from "./store/modules/data"

const apiClient = axios.create({
  baseURL: "http://localhost:8080/fileupload/details",
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "localhost"
  },
  timeout: 10000
});

export default {
  getData() {
    return apiClient.get();
  }
};