import { RouteObject, Navigate } from "react-router-dom";

import { Intro } from "../pages/published";

export const publishedRoutes: RouteObject[] = [
  { index: true, element: <Navigate to={"intro"} replace /> },
  { path: "intro", element: <Intro /> },
];