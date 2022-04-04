/* import axios from 'axios';

export default axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    withCredentials: true,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        }
  
});

 */
import axios from "axios";

const VUE_APP_API_URL = process.env["VUE_APP_API_URL"];

export default {
  install(Vue) {
    Vue.prototype.$axios = axios.create({
      baseURL: VUE_APP_API_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};