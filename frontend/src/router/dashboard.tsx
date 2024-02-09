import { RouteObject, Navigate } from "react-router-dom";

import { Home, Surveys } from "../pages/dashboard";

export const dashboardRoutes: RouteObject[] = [
    { index: true, element: <Navigate to={'home'} replace /> },
    { path: 'home', element: <Home /> },
    { path: 'survey', element: <Surveys /> },
];
