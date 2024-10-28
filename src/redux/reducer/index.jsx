import { combineReducers } from "redux";
import {
  productReducer,
  selectedProduct,
  recentProduct,
} from "./productReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  product: selectedProduct,
  recentProduct: recentProduct,
});
export default rootReducer;
