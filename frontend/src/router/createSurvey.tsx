import { RouteObject } from "react-router-dom";

import { CreateSurvey } from "../pages/createSurvey";

export const createSurveyRoutes: RouteObject[] =[
    {path:"/createSurvey", element:<CreateSurvey />}
]