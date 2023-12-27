import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "../pages/Homepage";
import PrivateRoutes from "./PrivateRoutes";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    element: <PrivateRoutes />,
    children: [{ index: true, element: <Homepage /> }],
  },
]);

export default browserRouter;
