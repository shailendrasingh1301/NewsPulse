import ApiConfig from './apiConfig';
import commonApiFunction from './commonApiFunction';

export const getNewsAPI = payload => {
  const url = ApiConfig.NEWS_API;
  return commonApiFunction('get', url, null, payload);
};
