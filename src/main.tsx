import React from "react";
import ReactDOM from "react-dom/client";
import browserRouter from "./router/router";
import { RouterProvider } from "react-router-dom";
import "../cssDist/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
);
