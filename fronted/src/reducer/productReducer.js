import {
  PRODUCT_REQUEST_FAIL,
  PRODUCT_REQUEST_RESPONSE,
  PRODUCT_REQUEST_SUCCESS,
} from "../constans/productConstans";

export const productReducer = (
  state = { product: [], loading: false },
  action
) => {
  switch (action.type) {
    case PRODUCT_REQUEST_RESPONSE:
      return { ...state, loading: true };
    case PRODUCT_REQUEST_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
