// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const apiKey = 'ee8c988b';

// export const fetchMovies = createAsyncThunk(
//     'movies/fetchMovies',
//     async ({ query, page }) => {
//         const url = `http://www.omdbapi.com/?s=${query}&page=${page}&apikey=${apiKey}`;
//         try {
//             const response = await axios.get(url);
//             const data = response.data;
//             if (data.Response === 'True') {
//                 return { movies: data.Search, totalResults: data.totalResults };
//             } else {
//                 return { movies: [], totalResults: 0 };
//             }
//         } catch (error) {
//             console.error('Error fetching the movie data:', error);
//             return { movies: [], totalResults: 0 };
//         }
//     }
// );