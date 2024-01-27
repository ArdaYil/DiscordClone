import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "../pages/Homepage";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login";
import Register from "../pages/Register";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [{ index: true, element: <Homepage /> }],
  },
]);

export default browserRouter;
