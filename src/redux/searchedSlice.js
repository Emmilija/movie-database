import { createSlice } from '@reduxjs/toolkit';

const searchedSlice = createSlice({
    name: 'searched',
    initialState: [],
    reducers: {
        addSearched: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addSearched } = searchedSlice.actions;
export default searchedSlice.reducer;