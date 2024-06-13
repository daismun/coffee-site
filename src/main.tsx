import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import BrewerWiki from "./pages/brewerwiki/brewerwiki.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/globals.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/src/pages/brewerwiki/",
    element: <BrewerWiki/>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
