import { ADD_TO_ORDER, DELETE_ORDER } from './types';

export const addToOrder = (item) => ({
  type: ADD_TO_ORDER,
  payload: item,
});

export const deleteOrder = (id) => ({
  type: DELETE_ORDER,
  payload: id,
});
