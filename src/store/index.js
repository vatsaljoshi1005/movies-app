import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../slice/movieSlice';
import filterReducer from '../slice/filterSlice'; // new

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    filters: filterReducer
  }
});
