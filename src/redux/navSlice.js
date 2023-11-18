import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openNav: false,
};

export const navSlice = createSlice({
  name: 'navOpen',
  initialState,
  reducers: {
    navOpener: (state) => {
      return { ...state, openNav: !state.openNav };
    },
  },
});

export const { navOpener } = navSlice.actions;
export default navSlice.reducer;
