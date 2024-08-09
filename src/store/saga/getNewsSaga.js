import {call} from 'redux-saga/effects';
import {getNewsAPI} from '../../services/commonApis';

function* getNewsSags({payload}) {
  try {
    const response = yield call(getNewsAPI);

    if (response.status === 200 && response.data) {
      payload.successCallback(response?.data);
    } else {
      payload.failureCallback(response?.data.message);
    }
  } catch (error) {
    payload.failureCallback(error);
  }
}

export default getNewsSags;
