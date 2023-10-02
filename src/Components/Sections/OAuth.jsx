import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
    <button className="flex items-center justify-center w-full uppercase  px-7 py-2 text-sm font-medium rounded border border-gray-300 rounded-md bg-red-600 hover:bg-red-700 active:bg-red-900 text-white shadow-md hover:shadow-lg active:shadow-lg transition ease-in-out duration-300">
      <FcGoogle className="text-2xl mr-2 bg-white rounded-full" /> Continue with
      Google
    </button>
  );
}

export default OAuth