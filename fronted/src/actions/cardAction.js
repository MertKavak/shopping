import axios from "axios";
import {
  ADDRESS_ADD,
  CARD_ITEM_ADD,
  CARD_ITEM_DELETE,
  PAYMENT_ADD,
} from "../constans/productConstans";

export const AddCard = (productId, qty) => async (dispatch, getState) => {
  console.log(productId, qty);
  const { data } = await axios.get(`/api/product/${productId}`);

  dispatch({
    type: CARD_ITEM_ADD,
    payload: {
      name: data.title,
      price: data.price,
      image: data.image,
      product: data._id,
      countInstock: data.countInstock,
      qty,
    },
  });
  localStorage.setItem(
    "cartItem",
    JSON.stringify(getState().cardItem.cartItem)
  );
};

export const DeleteCard = (productId) => (dispatch, getState) => {
  dispatch({
    type: CARD_ITEM_DELETE,
    payload: productId,
  });
  localStorage.setItem(
    "cartItem",
    JSON.stringify(getState().cardItem.cartItem)
  );
};

export const AddressItem = (item) => (distpatch) => {
  distpatch({
    type: ADDRESS_ADD,
    payload: item,
  });
  localStorage.setItem("shippingAddress", JSON.stringify(item));
};
export const paymetMethot = (payment) => (distpatch) => {
  distpatch({
    type: PAYMENT_ADD,
    payload: payment,
  });
  localStorage.setItem("paymentt", JSON.stringify(payment));

}
