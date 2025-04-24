import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"CounterApp",
    initialState:0,
    reducers:{
        increment:(state,action)=>
        {
            return state+1
        },
        decrement:(state,action)=>
        {
            return state-1
        }
    }
})

export default counterSlice.reducer;
export const {increment,decrement} = counterSlice.actions