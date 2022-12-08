import React, { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes";

const browserRouter = createBrowserRouter(routes);

export function Router() {
  return (
    <Suspense fallback="Loading...">
      <RouterProvider router={browserRouter} />
    </Suspense>
  );
}
