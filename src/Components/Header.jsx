import { useLocation } from "react-router";
const Header = () => {
  const location = useLocation();
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-7xl mx-auto my-2">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt=""
            className=" h-5 cursor-pointer"
          />
        </div>
        <div>
          <ul className="flex  items-center justify-between space-x-10">
            <li
              className={`py-3 text-sm font-semibold text-gray-400  ${pathMatchRoute("/") && "text-zinc-900 border-b-4 border-red-500"}`}>
              Home
            </li>

            <li >Offers</li>
            <li>Sign In</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
