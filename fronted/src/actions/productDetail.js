import axios from "axios";
import {
  PRODUCTDETAİL_REQUEST_FAIL,
  PRODUCTDETAİL_REQUEST_RESPONSE,
  PRODUCTDETAİL_REQUEST_SUCCESS,
} from "../constans/productConstans";

export const productDetail = (productID) => async (distpatch) => {
  distpatch({ type: PRODUCTDETAİL_REQUEST_RESPONSE, payload: productID });
  try {
    const { data } = await axios.get(`/api/product/${productID}`);
    distpatch({ type: PRODUCTDETAİL_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    distpatch({
      type: PRODUCTDETAİL_REQUEST_FAIL,
      payload: error.response.data.message,
    });
  }
};
