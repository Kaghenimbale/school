import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: {},
  loggedIn: false,
};

export const createUser = createAsyncThunk('user/createUser', async (data) => {
  console.log(data);
  try {
    const response = await axios.post('http://127.0.0.1:3000/registrations', {
      user: {
        ...data,
      },
    });
    // console.log(response.data);
    return { ...response.data };
  } catch (err) {
    return err.message;
  }
});

export const fetchUser = createAsyncThunk('user/fetchUser', async (data) => {
  try {
    const response = await axios.post('http://127.0.0.1:3000/sessions', {
      user: {
        ...data,
      },
    });
    console.log(response.data);
    return { ...response.data };
  } catch (err) {
    return err.message;
  }
});

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  try {
    const response = await axios.delete('http://127.0.0.1:3000/logout');
    console.log(response);
  } catch (err) {
    return err.message;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(createUser.pending, (state) => ({
        ...state,
      }))
      .addCase(createUser.fulfilled, (state, action) => ({
        ...state,
        user: action.payload,
      }))
      .addCase(createUser.rejected, (state, action) => ({
        ...state,
        error: action.payload,
      }))
      .addCase(fetchUser.pending, (state) => ({
        ...state,
      }))
      .addCase(fetchUser.fulfilled, (state, action) => {
        localStorage.setItem('user', JSON.stringify(action.payload.user.id));
        localStorage.setItem('userInfo', JSON.stringify(action.payload.user));
        return {
          ...state,
          user: action.payload,
          loggedIn: true,
        };
      })
      .addCase(fetchUser.rejected, (state, action) => ({
        ...state,
        error: action.payload,
      }));
  },
});

export default userSlice.reducer;
