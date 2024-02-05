import { RouteObject, Navigate } from "react-router-dom";

import {
    Intro,
    Checkbox,
    Textbox,
    Checkbox2,
    Complete,
    ThankYou,
    ExpiredLink,
    NotPublished,
} from "../pages/published";

export const publishedRoutes: RouteObject[] = [
    { index: true, element: <Navigate to={"intro"} replace /> },
    { path: "intro", element: <Intro /> },
    { path: "checkbox", element: <Checkbox /> },
    { path: "textbox", element: <Textbox /> },
    { path: "checkbox2", element: <Checkbox2 /> },
    { path: "complete", element: <Complete /> },
    { path: "thank", element: <ThankYou /> },
    { path: "timeout", element: <ExpiredLink /> },
    { path: "notpublished", element: <NotPublished /> },
];
