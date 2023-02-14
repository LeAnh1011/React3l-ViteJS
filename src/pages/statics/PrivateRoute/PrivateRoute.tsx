import React from "react";
import * as Cookie from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const token = Cookie.get("Token");
  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
