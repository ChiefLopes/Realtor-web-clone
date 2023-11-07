import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../../hooks/useAuthStatus";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <h2>Loading...</h2>;
  }

  return <Outlet>{loggedIn ? null : <Navigate to="/sign-in" />}</Outlet>;
};

export default PrivateRoute;
