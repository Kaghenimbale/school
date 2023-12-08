import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  livres: [],
  isLoading: false,
  isFetched: false,
  err: null,
};

export const addBook = createAsyncThunk('book/addBook', async (data) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:3000/api/v1/livres',
      data,
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const getBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/api/v1/livres');

    return response.data;
  } catch (err) {
    return err.message;
  }
});

// DELETE BOOK

// export const deleteBook = createAsyncThunk('book/deleteBook', async (id) => {
//   try {
//     await axios.delete(`http://127.0.0.1:3000/api/v1/books/${id}`);
//     return id;
//   } catch (err) {
//     return err.message;
//   }
// });

// UPDATE BOOK

// export const updateBook = createAsyncThunk('book/updateBook', async (book) => {
//   await axios.patch(`http://127.0.0.1:3000/api/v1/books/${book.id}`, book);
//   return book;
// });
const livreSlice = createSlice({
  name: 'livres',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(addBook.pending, (state) => ({
        ...state,
      }))

      .addCase(addBook.fulfilled, (state) => ({
        ...state,
      }))
      .addCase(addBook.rejected, (state) => ({
        ...state,
      }))
      .addCase(getBooks.pending, (state) => ({
        ...state,
        isLoading: true,
        isFetched: false,
        err: null,
      }))
      .addCase(getBooks.fulfilled, (state, action) => ({
        ...state,
        livres: action.payload,
        isFetched: true,
        isLoading: false,
      }))
      .addCase(getBooks.rejected, (state, action) => ({
        ...state,
        err: action.payload,
        isLoading: false,
      }));
  },
});

export default livreSlice.reducer;
