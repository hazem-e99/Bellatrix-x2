// src/Redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import solutionsReducer from './features/solutions/solutionsSlice';
import servicesReducer from './features/services/servicesSlice';
import industriesReducer from './features/industries/industriesSlice';

export const store = configureStore({
  reducer: {
    solutions: solutionsReducer,
    services: servicesReducer,
    industries: industriesReducer,
    // Add other reducers here as needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;