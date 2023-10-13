import { useState } from "react";
import { Link } from "react-router-dom";
import handWithKey from "../../../src/assets/hand-key.avif";
import OAuth from "../Sections/OAuth";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import { toast } from "react-toastify";
const ForgotPassword = () => {
  // Created the form data hook
  const [email, setEmail] = useState("");

  const onChange = (e) => {
      setEmail(e.target.value)
  }
    
    const onSubmit = (e) => {
        e.preventDefault();
        
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.success("Email sent");
        })
    }
  return (
    <section>
      <h1 className="text-4xl font-bold text-center mt-4">Forgot Password</h1>

      {/* this div houses both the image and the form sections */}
      <div className="flex justify-center  flex-wrap items-center py-12 px-6 max-w-5xl mx-auto">
        <div className="md:w-[67%] lg:w-[40%] mb-12 md:mb-6 ">
          <img
            src={handWithKey}
            alt="handWitKey"
            className="w-full rounded-2xl h-[22rem] object-cover w-[50rem]"
          />
        </div>
        {/* For the image */}
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 ">
          <form onSubmit={onSubmit}>
            <input
              className="w-full w-[16rem] h-12 px-2 my-4 text-grey-600 bg-white border-2 border-gray-300 rounded-md outline-blue-500 transition ease-in-out duration-500 focus:border-blue-500 focus:shadow-md"
              type="email"
              placeholder="Email address"
              id="email"
              value={email}
              onChange={onChange}
            />
            <div className="relative mb-6">
              <div className="flex justify-between whitespace-nowrap md:text-sm sm:text-lg">
                <p>
                  Don&apos;t have an account?
                  <Link
                    to="/sign-up"
                    className="text-red-500 hover:text-red-700 transition ease-in-out duration-500">
                    Register
                  </Link>
                </p>
                              <p className="text-blue-500">
                  <Link
                    to="/sign-in"
                    className="text-blue-500 hover:text-blue-800 transition ease-in-out duration-500">
                    Sign In Instead
                  </Link>
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium shadow-md uppercase font-bold py-2 px-4 rounded w-full transition ease-in-out duration-150 hover:shadow-lg active:bg-blue-800">
              Send Reset Password
            </button>
            <div className="my-3 flex before:border-t before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1 items-center after:border-gray-300">
              <p className="text-center mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
