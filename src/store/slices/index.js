import {combineReducers} from '@reduxjs/toolkit';
import commonSlice from './commonSlice';
import newsSlice from './newsSlice';
import userSlice from './userSlice';

export const rootReducer = combineReducers({
  user: userSlice,
  common: commonSlice,
  news: newsSlice,
});
