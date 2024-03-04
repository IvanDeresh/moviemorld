import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SeatState {
  id: number;
  time: string;
  date: number;
  title: string;
  poster_path: string;
  price: number;
  vote_average: number;
  number_seats: number;
}

interface InitialState {
  value: SeatState[];
}

const initialState: InitialState = {
  value: [],
};

export const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<SeatState>) => {
      state.value.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter(
        (product) => product.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.value = [];
    },
  },
});

export const { removeProduct, addProduct, clearCart } = product.actions;
export default product.reducer;
