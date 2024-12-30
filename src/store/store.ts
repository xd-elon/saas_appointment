import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from './features/appointmentsSlice';

export const store = configureStore({
  reducer: {
    appointments: appointmentReducer, // Adicione aqui os slices que você criar
  },
});

// Tipos para o TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;