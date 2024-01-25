import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: 0,
};

const counterSlice = createSlice({
   name: "counter",
   initialState,
   reducers: {
      increment: (state) => {
         state.value = state.value + 1;
      },
      decrement: (state) => {
         if (state.value > 0) {
            state.value = state.value - 1;
         }
      },
      incrementByNumber: (state, action) => {
         state.value = state.value + action.payload;
      },
   },
});

export const { increment, decrement, incrementByNumber } = counterSlice.actions;

export const CounterReducer = counterSlice.reducer;
