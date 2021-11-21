import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { logTitleError, logTitleSuccess, prettyPrint } from '../utils/logger';

const instance = axios.create({
  baseURL: 'http://localhost:3004',
  headers: {
    Authorization: 'Bearer lkjaslkjsdf',
  },
});

function onFulfilledRequest(config: AxiosRequestConfig) {
  logTitleSuccess(config.url);
  logTitleSuccess(config.method);

  if (!config?.headers) {
    return config;
  }

  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
}

function onFulfilledResponse(response: AxiosResponse) {
  logTitleSuccess(response.status);
  prettyPrint(response.data);
  return response;
}

function onRejectedRequest(error: any) {
  logTitleError(error.message);
  return Promise.reject(error);
}

function onRejectedResponse(error: any) {
  logTitleError(error.config.url);
  return Promise.reject(error);
}

instance.interceptors.request.use(onFulfilledRequest, onRejectedRequest);
instance.interceptors.response.use(onFulfilledResponse, onRejectedResponse);

export default instance;
