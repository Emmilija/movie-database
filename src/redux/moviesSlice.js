import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../lib/axiosInstance';


export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ query, page }) => {
    try {
      const response = await AxiosInstance( {
        url: '/',
        method: 'GET',
        params: {
          s: query,
          page: page
        }
      });
      const data = response.data;
      console.log(data);
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