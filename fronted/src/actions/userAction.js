import axios from "axios";
import {
  USER_LOGOUT_ITEM,
  USER_REGISTER_FAIL,
  USER_REGISTER_RESPONSE,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_RESPONSE,
  USER_SIGNIN_SUCCESS,
} from "../constans/productConstans";

export const user_signin = (email, password) => async (distpatch, getState) => {
  distpatch({
    type: USER_SIGNIN_RESPONSE,
    payload: {
      email,
      password,
    },
  });
  try {
    const { data } = await axios.post("/api/users/signin", { email, password });
    distpatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userSignin", JSON.stringify(data));
  } catch (error) {
    distpatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userRegister = (name,email,password) => async (distpatch) => {
  distpatch({
    type: USER_REGISTER_RESPONSE,
    payload: {
      name,
      email,
      password,
    },
  });
  try {
    const { data } = await axios.post("/api/users/register", {name, email, password });
    distpatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    distpatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userLogout = () => (distpatch) => {
  distpatch({
    type: USER_LOGOUT_ITEM
  })
  localStorage.removeItem('userSignin');
}
