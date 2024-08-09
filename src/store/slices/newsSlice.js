import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getNews: {
      reducer: () => {},
      prepare: (data, successCallback, failureCallback) => ({
        payload: {
          data,
          successCallback,
          failureCallback,
        },
      }),
    },
  },
});

export const {getNews} = newsSlice.actions;

export default newsSlice.reducer;
