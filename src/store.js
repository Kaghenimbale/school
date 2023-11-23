import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/user/userSlice';
import navReducer from './redux/navSlice';
import bookReducer from './redux/bookSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    navOpen: navReducer,
    books: bookReducer,
  },
});

export default store;
