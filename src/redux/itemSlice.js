// objectSlice.js
import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'itemData',
  initialState: {},
  reducers: {
    // Reducer to store data
    storeData: (state, action) => {
      // Assuming the payload is an object
      return { ...state, ...action.payload };
    },
  },
});

export const { storeData } = itemSlice.actions;
export default itemSlice.reducer;
