import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./features/counterSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
   reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      counter: CounterReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
