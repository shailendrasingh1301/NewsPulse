import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  accessToken: '',
  userId: '',
  user_name: 'Innopad Solution',
  user_password: 'Innopad@123',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    registerUser: {
      reducer: (state, action) => {},
      prepare: (data, successCallback, failureCallback) => ({
        payload: {
          data,
          successCallback,
          failureCallback,
        },
      }),
    },
    loginUser: {
      reducer: (state, action) => {},
      prepare: (data, successCallback, failureCallback) => ({
        payload: {
          data,
          successCallback,
          failureCallback,
        },
      }),
    },
    logoutUser: {
      reducer: (state, action) => {},
      prepare: (data, successCallback, failureCallback) => ({
        payload: {
          data,
          successCallback,
          failureCallback,
        },
      }),
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setUserID: (state, action) => {
      state.userId = action.payload;
    },
    setUserName: (state, action) => {
      state.user_name = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      console.log('action', action);
      state.isLoggedIn = action.payload;
    },
  },
});

export const {
  registerUser,
  loginUser,
  logoutUser,
  setAccessToken,
  setUserID,
  setUserName,
  setIsLoggedIn,
} = userSlice.actions;
export default userSlice.reducer;
