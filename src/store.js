import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/user/userSlice';
import navReducer from './redux/navSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    navOpen: navReducer,
  },
});

export default store;
