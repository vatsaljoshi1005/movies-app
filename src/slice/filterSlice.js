// filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    searchTitle: '',
    selectedGenre: 'All',
    minRating: '',
  },
  reducers: {
    setSearchTitle: (state, action) => {
      state.searchTitle = action.payload;
    },
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
    setMinRating: (state, action) => {
      state.minRating = action.payload;
    },
  },
});

export const { setSearchTitle, setSelectedGenre, setMinRating } = filterSlice.actions;
export default filterSlice.reducer;
