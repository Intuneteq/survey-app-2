import { RouteObject, Navigate } from "react-router-dom";

import { Intro } from "../pages/public";

export const publicRoutes: RouteObject[] = [
  { index: true, element: <Navigate to={"intro"} replace /> },
  { path: "intro", element: <Intro /> },
];