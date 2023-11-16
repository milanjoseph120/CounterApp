import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name:"counterapp",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state , action )=>{
            state.value +=action.payload
        },

        decrement:(state , action )=>{
            state.value -=action.payload
        },

        reset:(state)=>{
            state.value = 0
        }
    }

})
export const{increment, decrement, reset} =CounterSlice.actions
export default CounterSlice.reducer