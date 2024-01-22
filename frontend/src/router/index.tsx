import { createBrowserRouter } from "react-router-dom";

import { AuthLayout } from "../pages/auth";

import { authRoutes } from "./auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: authRoutes,
  },
]);

export default router;
