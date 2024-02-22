import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "./reducer/productReducer";
import { productDetailReducer } from "./reducer/productDetailRedycer";
import { cardReducer } from "./reducer/cardReducer";

const initialState = {
  cardItem: {
    cartItem: localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : [],
  },
};
const reducer = combineReducers({
  productList: productReducer,
  productDetail: productDetailReducer,
  cardItem: cardReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
