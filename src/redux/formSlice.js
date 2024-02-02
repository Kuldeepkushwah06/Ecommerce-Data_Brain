// objectSlice.js
import { createSlice } from '@reduxjs/toolkit';

const formDataSlice = createSlice({
  name: 'formData',
  initialState: {},
  reducers: {
    // Reducer to store data
    storeData: (state, action) => {
      // Assuming the payload is an object
      return { ...state, ...action.payload };
    },
  },
});

export const { storeData } = formDataSlice.actions;
export default formDataSlice.reducer;
