import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
  isFetched: false,
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

// DELETE BOOK

export const deleteBook = createAsyncThunk('book/deleteBook', async (id) => {
  try {
    await axios.delete(`http://127.0.0.1:3000/api/v1/books/${id}`);
    return id;
  } catch (err) {
    return err.message;
  }
});

// UPDATE BOOK

export const updateBook = createAsyncThunk('book/updateBook', async (book) => {
  await axios.patch(`http://127.0.0.1:3000/api/v1/books/${book.id}`, book);
  return book;
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
        isFetched: false,
        err: null,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        books: [...action.payload],
        isFetched: true,
        isLoading: false,
      }))
      .addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        err: action.payload,
        isLoading: false,
      }))
      .addCase(deleteBook.pending, (state) => ({
        ...state,
        isLoading: true,
        isFetched: false,
      }))
      .addCase(deleteBook.fulfilled, (state, action) => {
        const newBooks = state.books.filter(
          (book) => book.id !== action.payload,
        );
        return {
          ...state,
          books: [...newBooks],
          isFetched: true,
          isLoading: false,
        };
      })
      .addCase(deleteBook.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        err: action.payload,
      }))
      .addCase(updateBook.fulfilled, (state, action) => {
        const newBooks = state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book,
        );
        return {
          ...state,
          books: [...newBooks],
          isFetched: true,
          isLoading: false,
        };
      });
  },
});

export default bookSlice.reducer;
