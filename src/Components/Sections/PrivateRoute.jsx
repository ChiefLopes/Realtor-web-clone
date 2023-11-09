import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import Spinner from "../Spinner";


const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />
  }

  return <Outlet>{loggedIn ? null : <Navigate to="/sign-in" />}</Outlet>;
};

export default PrivateRoute;
