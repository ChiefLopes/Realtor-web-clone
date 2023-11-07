import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../../hooks/useAuthStatus";
const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus();
    if (checkingStatus) {
        return <h2>Loading...</h2>
    }
    return  loggedIn ? <Outlet /> : <Navigate to="/sign-in"/>
        
}

export default PrivateRoute