import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "../Homepage";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Homepage /> }],
  },
]);

export default browserRouter;
