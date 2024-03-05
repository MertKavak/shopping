import { ADDRESS_ADD, CARD_ITEM_ADD, CARD_ITEM_DELETE, PAYMENT_ADD } from "../constans/productConstans";

export const cardReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case CARD_ITEM_ADD:
      const item = action.payload;
      const existItem = state.cartItem.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItem: state.cartItem.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItem: [...state.cartItem, item] };
      }

    case CARD_ITEM_DELETE:
      return {
        ...state,
        cartItem: state.cartItem.filter((x) => x.product !== action.payload),
      };
    case ADDRESS_ADD:
      return {
        ...state,
        userAddress: action.payload
      };
      case PAYMENT_ADD:
        return {
          ...state,
          userMethot: action.payload
        }
    default:
      return state;
  }
};
