import { configureStore } from '@reduxjs/toolkit';
import addReducer from '../features/appSlice';

export const store = configureStore({
  reducer: {
    app: addReducer,
  },
});



