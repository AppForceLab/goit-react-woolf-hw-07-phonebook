import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});