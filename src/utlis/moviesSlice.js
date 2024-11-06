import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideos: null,
        popularMovies: null,
        upcomingMovies: null,

    },
    reducers:{
        addNowPlayingMovies:(state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideos: (state, action) =>{
            state.trailerVideos = action.payload;
        },
        addPopluarMovies:(state, action) =>{
            state.popularMovies =  action.payload;
        },
        addUpcomingMovies:(state, action) =>{
            state.upcomingMovies =  action.payload;
        },
    }
});

export const { addNowPlayingMovies, addTrailerVideos, addPopluarMovies, addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;