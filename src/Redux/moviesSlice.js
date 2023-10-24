import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getTrending = createAsyncThunk('movies/getTrending', async(mediaType)=>{
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f04abd28a278b378a10634e8da13acc0`);
    return data.results;
})

let initialState = {
    trendingMovies:[],
    trendingTv:[],
    trendingPerson:[],
    loading:false
}

let movieSlice = createSlice({
    name:'movie',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getTrending.fulfilled,(state,action)=>{
            if (action.meta.arg === 'movie') {
              state.trendingMovies = action.payload;
            } else if (action.meta.arg === 'tv') {
              state.trendingTv = action.payload;
            } else if (action.meta.arg === 'person') {
              state.trendingPerson = action.payload;
            }            
        })
        // builder.addCase(getTrending.pending)
        // builder.addCase(getTrending.rejected)
    }
})
let movieReducer = movieSlice.reducer;
export default movieReducer