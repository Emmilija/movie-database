import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'ee8c988b'


export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',

    async ({ query, page }) => {
      const url = `http://www.omdbapi.com/?s=${query}&page=${page}&apikey=${apiKey}`;
      try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(data)
        if (data.Response === 'True') {
          return { movies: data.Search, totalResults: data.totalResults };
       
        } else {
          return { movies: [], totalResults: 0 };
        }
      } catch (error) {
        console.error('Error fetching the movie data:', error);
        return { movies: [], totalResults: 0 };
      }
    }
  );

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        totalResults: 0,
        status: 'idle',
        error: null,
    },
    reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload.movies;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;