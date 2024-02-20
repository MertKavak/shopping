import {
  PRODUCTDETAİL_REQUEST_FAIL,
  PRODUCTDETAİL_REQUEST_RESPONSE,
  PRODUCTDETAİL_REQUEST_SUCCESS,
} from "../constans/productConstans";

export const productDetailReducer = (
  state = { loading: false, product: {} },
  action
) => {
  switch (action.type) {
    case PRODUCTDETAİL_REQUEST_RESPONSE:
      return { ...state, loading: true };
    case PRODUCTDETAİL_REQUEST_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCTDETAİL_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
