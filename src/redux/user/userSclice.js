import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: {},
  loggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers(builder) {
    builder;
  },
});

export default userSlice.reducer;
