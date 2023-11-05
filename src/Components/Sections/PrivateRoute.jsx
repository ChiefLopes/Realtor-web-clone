import { Navigate, Outlet } from "react-router";
const PrivateRoute = () => {
    const loggedIn = true;
    return (
    loggedIn ? <Outlet /> : <Navigate to="/sign-in"/>
        )
}

export default PrivateRoute