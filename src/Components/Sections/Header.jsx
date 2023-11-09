import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
const Header = () => {
  // Cretaed a hook for the page state
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth()
   useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
            setPageState("Profile")
            } else {
            setPageState("Sign in")
            }
        })
    }, [auth])
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-7xl mx-auto my-2">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/  rdc-logo-default.svg"
            alt=""
            className=" h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex  items-center justify-between space-x-10">
            <li
              onClick={() => navigate("/")}
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400  ${
                pathMatchRoute("/") && "text-zinc-900 border-b-4 border-red-500"
              }`}>
              Home
            </li>

            <li
              onClick={() => navigate("/offers")}
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400  ${
                pathMatchRoute("/offers") &&
                "text-zinc-900 border-b-4 border-red-500"
              }`}>
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400  ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-zinc-900 border-b-4 border-red-500"
              }`}
              onClick={() => navigate("/profile")}>
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
