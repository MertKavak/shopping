import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UserRoutes = ({ children }) => {
  const user = useSelector((state) => state.userSignin);

  return user.userInfo.token ? children : <Navigate to="/login" />;
};
export default UserRoutes;
