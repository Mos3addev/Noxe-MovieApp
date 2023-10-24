import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    counter:0,
    userName:'Ahmed Mos3ad'
}
let counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increase:(state)=>{state.counter +=1},
        decrease:(state)=>{state.counter -=1},
        incrementByAmount:(state,action)=>{
            state.counter += action.payload
        }
    }
})
export const counterReducer = counterSlice.reducer;
export const {increase , decrease , incrementByAmount } = counterSlice.actions;