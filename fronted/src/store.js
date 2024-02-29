import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "./reducer/productReducer";
import { productDetailReducer } from "./reducer/productDetailReducer";
import { cardReducer } from "./reducer/cardReducer";
import { userReducer, userRegisterReducer } from "./reducer/userReducer";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userSignin")
      ? JSON.parse(localStorage.getItem("userSignin"))
      : [],
  },
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
  userSignin: userReducer,
  userRegisterIn: userRegisterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
