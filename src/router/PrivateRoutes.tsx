import { useStore } from "zustand";
import useUserStore from "../stores/userStore";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const user = useStore(useUserStore, (store) => store.user);

  if (user === null) return <Navigate to="login" />;

  return <Outlet />;
};

export default PrivateRoutes;
