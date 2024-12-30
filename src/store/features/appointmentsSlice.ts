import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Tipo para Appointment
interface Appointment {
  id: string;
  time: string;
  patient: string;
  insurance: string;
  test: string;
  techinical: string;
  location: string;
  status: string;
  timer: string;
}

// Estado inicial,.
interface AppointmentsState {
  items: Appointment[];
  modalCreate: boolean
  modalEdit: boolean
}

const initialState: AppointmentsState = {
  items: [],
  modalCreate: false,
  modalEdit: false
};

// Criação do slice de appointments
const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.items.push(action.payload); // Adiciona um novo appointment à lista
    },
    removeAppointment: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload); // Remove um appointment pela id
    },
    updateAppointment: (state, action: PayloadAction<Appointment>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload; // Atualiza o appointment
      }
    },
    toggleModal: (state) => {
      // console.log()
      state.modalCreate = !state.modalCreate
    }
  },
});

export const { addAppointment, removeAppointment, updateAppointment, toggleModal } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;