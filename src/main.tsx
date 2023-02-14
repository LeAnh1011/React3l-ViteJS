import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pages/statics/Login/Login";
import PrivateRoute from "./pages/statics/PrivateRoute/PrivateRoute";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path={`${process.env.VITE_PUBLIC_URL}/login`}
          element={<Login />}
        />
        <Route
          path={`${process.env.VITE_PUBLIC_URL}/*`}
          element={<PrivateRoute />}
        >
          <Route element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
