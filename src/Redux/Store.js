import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import movieReducer from "./moviesSlice";


let store = configureStore({
    reducer:{
        counter : counterReducer,
        movie : movieReducer
    }
})

export default store;