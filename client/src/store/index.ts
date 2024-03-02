import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import seatReducer from "./features/seat-slice";
const storeOptions = {
  reducer: {
    seat: seatReducer,
  },
};

export const store = configureStore({
  reducer: {
    seates: seatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
