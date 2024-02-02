// store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Slice';
import formDataSlice from './formSlice'
import itemSlice from './itemSlice';

export const Store = configureStore({
  reducer: {
    products: productsReducer,
    formData: formDataSlice,
    itemData : itemSlice,
  },
});


