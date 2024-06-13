import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import BrewerGallery from "./pages/brewergallery/index.tsx";
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
    path: "/src/pages/brewergallery/",
    element: <BrewerGallery/>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
