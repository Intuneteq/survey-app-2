import { RouteObject, Navigate } from "react-router-dom";

import { Login } from "../pages/auth";

export const authRoutes: RouteObject[] = [
  { index: true, element: <Navigate to={"/login"} replace /> },
  { path: "login", element: <Login /> },
];
