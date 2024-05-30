import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addFavorites: (state, action) => {
            if (!state.find(movie => movie.imdbID === action.payload.imdbID)) {
                state.push(action.payload);
            }
            
        },
        removeFavorite: (state, action) => {
            return state.filter(movie => movie.imdbID !== action.payload);
        },
    },
})

export const { addFavorites, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;