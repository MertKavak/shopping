import axios from "axios";
import {
  PRODUCT_REQUEST_FAIL,
  PRODUCT_REQUEST_RESPONSE,
  PRODUCT_REQUEST_SUCCESS,
} from "../constans/productConstans";

export const listProduct = () => async (distpatch) => {
  distpatch({ type: PRODUCT_REQUEST_RESPONSE });
  try {
    const { data } = await axios.get("/api/product");
    distpatch({ type: PRODUCT_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    distpatch({ type: PRODUCT_REQUEST_FAIL, payload: error.message });
  }
};
