import { configureStore } from '@reduxjs/toolkit';
import postSlice from '../featuers/post/postSlice';
import todoSlice from '../featuers/todo/todoSlice';
import userSlice from '../featuers/user/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
    post: postSlice,
  },
});

export default store;
