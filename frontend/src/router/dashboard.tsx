import { RouteObject } from "react-router-dom";

import { Home, Surveys } from "../pages/dashboard";

export const dashboardRoutes: RouteObject[] = [
    { index: true, element: <Home /> },
    { path: 'survey', element: <Surveys /> },
];
