import {
  USER_LOGOUT_ITEM,
  USER_REGISTER_FAIL,
  USER_REGISTER_RESPONSE,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_RESPONSE,
  USER_SIGNIN_SUCCESS,
} from "../constans/productConstans";

export const userReducer = (
  state = { loading: false, error: false },
  action
) => {
  switch (action.type) {
    case USER_SIGNIN_RESPONSE:
      return { ...state, loading: true };
    case USER_SIGNIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { ...state, error: action.payload };
    case USER_LOGOUT_ITEM:
      return { ...state, userInfo: {} };
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_RESPONSE:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
