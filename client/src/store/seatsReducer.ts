"use client";
interface Seat {
  id: object;
  time: number;
  date: number;
  title: string;
  poster_path: string;
  vote_average: number;
  number_seats: number;
}

interface SeatState {
  product: Seat[];
}

const initialState: SeatState = {
  product: [],
};

const ADD_SEAT = "ADD_SEAT";
const REMOVE_SEAT = "REMOVE_SEAT";

interface AddSeatAction {
  type: typeof ADD_SEAT;
  payload: Seat;
}

interface RemoveSeatAction {
  type: typeof REMOVE_SEAT;
  payload?: { _id: object };
}

type ProductActionTypes = AddSeatAction | RemoveSeatAction;

const seatReducer = (
  state: SeatState = initialState,
  action: ProductActionTypes
): SeatState => {
  switch (action.type) {
    case "ADD_SEAT":
      return {
        ...state,
        product: [...state.product, action.payload],
      };
    case "REMOVE_SEAT":
      return {
        ...state,
        product: state.product.filter((p) => p.id !== action.payload?._id),
      };
    default:
      return state;
  }
};

export const removeSeat = (id: { _id: object }): RemoveSeatAction => ({
  type: REMOVE_SEAT,
  payload: id,
});

export const addSeat = (product: Seat): AddSeatAction => ({
  type: ADD_SEAT,
  payload: product,
});

export default seatReducer;
