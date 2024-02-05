import { createBrowserRouter } from "react-router-dom";

import { AuthLayout } from "../pages/auth";
import { PublishedLayout } from "../pages/published";

import { authRoutes } from "./auth";
import { publishedRoutes } from "./published";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: authRoutes,
    },
    {
        path: "/published",
        element: <PublishedLayout />,
        children: publishedRoutes,
    },
]);

export default router;
