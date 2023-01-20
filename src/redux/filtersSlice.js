// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// export const filtersSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     setVisibleContacts(_, action) {
//       return action.payload;
//     },
//   },
// });

// const persistConfig = {
//   key: 'filter',
//   storage,
// };

// export const filtersReducer = persistReducer(
//   persistConfig,
//   filtersSlice.reducer
// );

// export const { setVisibleContacts } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;
