const axios = require("axios");


const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_REST,
  responseType: "json",
  responseEncoding: "utf8",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },

});

export default axiosInstance;
