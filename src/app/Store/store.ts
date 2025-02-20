import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./data/dataSlice";
import filterReducer from "./filterSlice/filterSlice";
import filterMiddleware from "./filterSlice/filterMiddleware";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    data: dataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filterMiddleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
