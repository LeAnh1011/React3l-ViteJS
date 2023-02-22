import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

function PrivateRoute() {
  const token = Cookies.get("Token") ?? "Token";
  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
