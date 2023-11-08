import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './redux/user/userSclice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
