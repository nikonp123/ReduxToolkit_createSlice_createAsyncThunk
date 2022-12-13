import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  posts: [],
};

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { rejectWithValue, dispatch }) => {
    const response = await axios.get(url + '?_page=0&_limit=5');
    dispatch(setPosts(response.data));
  }
);

export const removePostById = createAsyncThunk(
  'posts/removePostById',
  async (id, { rejectWithValue, dispatch }) => {
    await axios.delete(url + `/${id}`);
    dispatch(removePost(id));
  }
);

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    removePost(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: {
    //start loading
    [getPosts.pending]: () => console.log('getPosts: pending'),

    //loading is succesfull
    [getPosts.fulfilled]: () => console.log('getPosts: fulfilled'),

    //erros loading
    [getPosts.rejected]: () => console.log('getPosts: rejected'),

    //for removePost
    [removePostById.pending]: () => console.log('removePostById: pending'),
    [removePostById.fulfilled]: () => console.log('removePostById: fulfilled'),
    [removePostById.rejected]: () => console.log('removePostById: rejected'),
  },
});

export default postSlice.reducer;
export const { setPosts, removePost } = postSlice.actions;
