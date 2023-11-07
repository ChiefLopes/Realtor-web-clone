import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../../hooks/useAuthStatus";
const PrivateRoute = () => {
    const {loggedIn, checkingStatus} = useAuthStatus()
    return (
    loggedIn ? <Outlet /> : <Navigate to="/sign-in"/>
        )
}

export default PrivateRoute