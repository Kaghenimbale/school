import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
  err: null,
};

export const postBook = createAsyncThunk('book/postBook', async (data) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:3000/api/v1/books',
      data,
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/api/v1/books');
    return response.data;
  } catch (err) {
    return err.message;
  }
});
const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(postBook.pending, (state) => ({
        ...state,
      }))
      .addCase(postBook.fulfilled, (state) => ({
        ...state,
      }))
      .addCase(postBook.rejected, (state, action) => ({
        ...state,
        err: action.payload,
      }))
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        books: action.payload,
        isLoading: false,
      }))
      .addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        err: action.payload,
        isLoading: false,
      }));
  },
});

export default bookSlice.reducer;
