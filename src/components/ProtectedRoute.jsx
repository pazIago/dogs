import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectedRoute = ({ children, redirect }) => {
  const { login } = useContext(UserContext);

  return login ? children : <Navigate to={redirect} end />;
};

export default ProtectedRoute;
