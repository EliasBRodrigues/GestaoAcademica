import { Navigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../auth/context/AuthContext";

function PrivateRoute({ children }) {
  const { isUserAuthenticate } = useAuth();
  return isUserAuthenticate() ? children : <Navigate to="/" />;
}

export default PrivateRoute;