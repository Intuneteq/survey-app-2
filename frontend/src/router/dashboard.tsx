import { RouteObject, Navigate } from "react-router-dom";

import { Home, Overview, Surveys } from "../pages/dashboard";


export const dashboardRoutes: RouteObject[] = [
    { index: true, element: <Navigate to={"home"} replace /> },
    { path: "home", element: <Home /> },
    { path: "survey", element: <Surveys /> },
    { path: "overview", element: <Overview /> },
];
