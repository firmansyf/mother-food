import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./App";
// import { useLocation } from "react-router";

const useAuth = () => {
  const { user } = useContext(UserContext);
  return user && user.loggedIn;
};

const ProtectedRoute = () => {
  // const location = useLocation();
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
