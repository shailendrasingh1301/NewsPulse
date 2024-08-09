import {devLog} from '../utils/consoles';
import axiosInstance from './axios';

const commonApiFunction = async (
  method,
  url,
  accessToken,
  payload = {},
  contentType = 'application/json',
) => {
  try {
    const headers = {};
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }
    const config = {
      method: method.toLowerCase(),
      url,
      headers: {
        'Content-Type': contentType,
        ...headers,
      },
    };

    if (['post', 'put', 'delete'].includes(method.toLowerCase())) {
      config.data = payload;
    }

    const response = await axiosInstance(config);
    devLog('API_CALLED:- ', url);
    devLog('API_RESPONSE:- ', response);

    return response;
  } catch (error) {
    devLog('API_CALLED:- ', url);
    devLog('API_ERROR_RESPONSE:- ', error.response ? error.response : error);
    return error.response ? error.response : error;
  }
};

export default commonApiFunction;
