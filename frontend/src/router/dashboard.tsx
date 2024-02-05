import { RouteObject } from "react-router-dom";

import { Home } from "../pages/dashboard";

export const dashboardRoutes: RouteObject[] = [
    { index: true, element: <Home /> },
];
