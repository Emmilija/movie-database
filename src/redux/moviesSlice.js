import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../lib/axiosInstance';


const resultsPerPage = 10;

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ query, page }) => {
    try {
      console.log('Fetching movies for query:', query); 
      console.log('Fetching movies for page:', page);
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
        const validMovies = data.Search.filter(movie => movie.imdbID);
        console.log('Fetching movies for page:',validMovies);
        return { movies: data.Search, totalResults: data.totalResults, resultsPerPage: 10 };
      } else {
        return { movies: [], totalResults: 0, resultsPerPage: 10 }
        ;
      }
    } catch (error) {
      console.error('Error fetching the movie data:', error);
      return { movies: [], totalResults: 0, resultsPerPage: 10 };
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
        state.totalPages = Math.ceil(action.payload.totalResults / resultsPerPage);
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;