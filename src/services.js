import axios from "axios";
import store from "./store/modules/data"

const apiClient = axios.create({
  baseURL: "https://datasci.brown.edu/task-registry/",
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "localhost"
  },
  timeout: 10000
});

const apiClientPost = axios.create({
    baseURL: "https://datasci.brown.edu/task-registry/",
    method: "POST",
    data: store.state.file,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "localhost"
    },
    timeout: 10000
  });

export default {
  getData() {
    return apiClient.get();
  },
  postData() {
      return apiClientPost.post();
  }
};