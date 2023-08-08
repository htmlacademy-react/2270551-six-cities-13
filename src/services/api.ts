import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  //AxiosResponse,
} from 'axios';
import { BACKEND_URL, REQUEST_TIMEOUT, AppRoute } from '../const';
import browserHistory from '.././browser-history';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
//import { toast } from 'react-toastify';

export const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.NOT_FOUND]: true,
};

//const shouldDisplayError = (response: AxiosResponse) =>
//  !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string }>) => {
      if (error.response?.status === StatusCodes.NOT_FOUND) {
        browserHistory.push (AppRoute.NotFound);
      }
      throw error;
    }
  );

  return api;
};
