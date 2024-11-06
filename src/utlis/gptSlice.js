import { createSlice } from "@reduxjs/toolkit"

const gptSilce = createSlice({
    name: 'gpt',
    initialState: {
        showGptSerach: false,
        movieResults: null,
        movieNames: null,
    },
    reducers: {
        toggleGptSerachView:(state) => {
            state.showGptSerach = !state.showGptSerach;

        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    }
}) 

export const  { toggleGptSerachView , addGptMovieResult} = gptSilce.actions;
export default gptSilce.reducer