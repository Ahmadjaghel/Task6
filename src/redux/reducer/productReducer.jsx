import { ActionTypes } from "../constants/actionTypes";
const initialState = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ALL_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProduct = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...payload };
    default:
      return state;
  }
};
export const recentProduct = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.RECENT_PRODUCT:
      return { ...payload };
    default:
      return state;
  }
};
