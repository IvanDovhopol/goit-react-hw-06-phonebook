import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filteredContacts: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { filteredContacts } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
