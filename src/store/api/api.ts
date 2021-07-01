import axios, { AxiosError, AxiosResponse, AxiosInstance } from "axios";

const URL = "https://603e38c548171b0017b2ecf7.mockapi.io";
const REQUEST_TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response: AxiosResponse) => {
    return response;
  };

  const onFail = (err: AxiosError) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
