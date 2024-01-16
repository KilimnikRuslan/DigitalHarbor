import { ADD_TO_ORDER, DELETE_ORDER } from './types';

const initialState = {
  orders: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((el) => el.id !== action.payload),
      };

    default:
      return state;
  }
};

export default rootReducer;
