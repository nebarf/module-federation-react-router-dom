import React, { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { Layout } from "../components/Layout";
import { app1RoutingPrefix, app2RoutingPrefix } from "./constants";

const App1Lazy = lazy(() => import("../components/App1"));
const App2Lazy = lazy(() => import("../components/App2"));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={`/${app1RoutingPrefix}`} />,
      },
      {
        path: `/${app1RoutingPrefix}/*`,
        element: <App1Lazy />,
      },
      {
        path: `/${app2RoutingPrefix}/*`,
        element: <App2Lazy />,
      },
    ],
  }
];