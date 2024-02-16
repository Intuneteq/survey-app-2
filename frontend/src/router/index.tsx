import { createBrowserRouter } from "react-router-dom";

import { AuthLayout } from "../pages/auth";
import { PublishedLayout } from "../pages/published";
import { DashboardLayout } from "../pages/dashboard";
import { Error } from "../pages/error";

import Home from "../pages/Home";

import { authRoutes } from "./auth";
import { publishedRoutes } from "./published";
import { dashboardRoutes } from "./dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: authRoutes,
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: dashboardRoutes,
    },
    {
        path: "/published",
        element: <PublishedLayout />,
        children: publishedRoutes,
    },
]);

export default router;
