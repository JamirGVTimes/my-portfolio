import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import ThemeSlice from '../features/slices/ThemeSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mytheme: ThemeSlice,
  },
});
