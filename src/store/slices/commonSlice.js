import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  showFullLoader: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    showFullScreenLoader: (state, action) => {
      state.showFullLoader = action.payload;
    },
  },
});

export const {showFullScreenLoader} = commonSlice.actions;

export default commonSlice.reducer;
