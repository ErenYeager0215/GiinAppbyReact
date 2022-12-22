import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Giin } from "../components/pages/Giin";
import { Login } from "../components/pages/Login";
import { Questions } from "../components/pages/Questions";
import { Data } from "../components/pages/Data";
import { ErrorPage } from "../components/pages/ErrorPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/giin",
    element: <Giin />,
  },
  {
    path: "/questions",
    element: <Questions />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/data",
    element: <Data />,
  },
]);
