// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import solutionsReducer from './features/solutions/solutionsSlice'

export const store = configureStore({
  reducer: {
    solutions: solutionsReducer,
    // Add other reducers here as needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;