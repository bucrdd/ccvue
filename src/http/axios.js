/**
 *
 */

import axios from "axios";
// import Cookies from "js-cookie";
import router from "@/router";
import config from "./config";

export default function $axios(options) {
  return new Promise((resolve, reject) => {
    const axiosInstance = axios.create({
      baseURL: config.baseUrl,
      headers: config.headers,
      timeout: config.timeout,
      withCredentials: config.withCredentials,
    });
    axiosInstance.interceptors.request.use(
      (config) => {
        var token = "";
        if (token) {
          config.headers.token = token;
        }
        return config;
      },
      (error) => {
        console.log(request.error);
        return Promise.error(error);
      }
    );
    axiosInstance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );
    axiosInstance(options)
      .then((res) => {
        resolve(res);
        return false;
      })
      .catch((error) => {
        reject(error);
      });
  });
}
