import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import searchedReducer from "./searchedSlice";
import moviesReducer from './moviesSlice';
import authSlice from "./auth/authSlice";

const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        searched: searchedReducer,
        movies: moviesReducer,
        auth: authSlice,
    },
});

export default store;