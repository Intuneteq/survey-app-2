import { createBrowserRouter } from "react-router-dom";

import { AuthLayout } from "../pages/auth";
import { PublicLayout } from "../pages/public";

import { authRoutes } from "./auth";
import { publicRoutes } from "./public";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: authRoutes,
  },
  {
    path: "/public",
    element: <PublicLayout />,
    children: publicRoutes
  }
]);

export default router;
