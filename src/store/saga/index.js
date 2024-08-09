import {all, takeLatest} from 'redux-saga/effects';
import {getNews} from '../slices/newsSlice';
import getNewsSags from './getNewsSaga';

export const rootSaga = function* root() {
  yield all([takeLatest(getNews.type, getNewsSags)]);
};
