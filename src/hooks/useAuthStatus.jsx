import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);
    
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => )
    })
    
  return (
    <div>useAuthStatus</div>
  )
}

export default useAuthStatus