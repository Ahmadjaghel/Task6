import { ActionTypes } from "../constants/actionTypes";
import data from "../../data.json";
export const allProducts = (count = 1) => {
  return {
    type: ActionTypes.ALL_PRODUCTS,
    payload: data.slice(
      (count - 1) * 6,
      count * 6 > data.length ? data.length : count * 6
    ),
  };
};
export const selectedProduct = (id = 1) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: data[id - 1],
  };
};
export const recentProduct = () => {
  return {
    type: ActionTypes.RECENT_PRODUCT,
    payload: data.slice(data.length - 9, data.length),
  };
};
