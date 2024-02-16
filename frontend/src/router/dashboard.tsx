import { RouteObject, Navigate } from "react-router-dom";

import {
    Home,
    Overview,
    Surveys,
    CreateSurvey,
    Design,
    Share,
    Result,
} from "../pages/dashboard";

export const dashboardRoutes: RouteObject[] = [
    { index: true, element: <Navigate to={"home"} replace /> },
    { path: "home", element: <Home /> },
    { path: "overview", element: <Overview /> },
    {
        path: "survey",
        children: [
            { index: true, element: <Surveys /> },
            {
                path: "create-survey",
                element: <CreateSurvey />,
                children: [
                    {
                        index: true,
                        element: <Navigate to={"design"} replace />,
                    },
                    {
                        path: "design",
                        element: <Design />,
                    },
                    {
                        path: "share",
                        element: <Share />,
                    },
                    {
                        path: "result",
                        element: <Result />,
                    },
                ],
            },
        ],
    },
];
