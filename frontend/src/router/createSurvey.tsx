import { RouteObject, Navigate } from "react-router-dom";

import { CreateSurvey, ShareSurvey } from "../pages/createSurvey";

export const createSurveyRoutes: RouteObject[] = [
    { index: true, element: <Navigate to={"createSurvey"} replace /> },
    { path: "createSurvey", element: <CreateSurvey /> },
    { path: "shareSurvey", element: <ShareSurvey /> },
];
