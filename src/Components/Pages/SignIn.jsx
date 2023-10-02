import { useState } from "react";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/ai";
import handWithKey from "../../../src/assets/hand-key.avif";

const SignIn = () => {
  const [showPassword, setshowPassword] = useState(true);
  // Created the form data hook
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });

  // Created a function to update the form data
  const { email, password } = formData;

  const onChange = (e) => {
    setFromData((prevState) => ({
      ...prevState,
      // updated the form data so that whatever is typed into the input field is stored in the form data object.
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section>
      <h1 className="text-4xl font-bold text-center mt-4">Sign In</h1>

      {/* this div houses both the image and the form sections */}
      <div className="flex justify-center  flex-wrap items-center py-12 px-6 max-w-5xl mx-auto">
        <div className="md:w-[67%] lg:w-[40%] mb-12 md:mb-6 ">
          <img
            src={handWithKey}
            alt="handwithkey"
            className="w-full rounded-2xl"
          />
        </div>
        {/* For the image */}
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 ">
          <form>
            <input
              className="w-full w-[16rem] h-12 px-2 text-grey-600 bg-white border-2 border-gray-300 rounded-md outline-blue-500 transition ease-in-out duration-500 focus:border-blue-500 focus:shadow-md"
              type="email"
              placeholder="Email address"
              id="email"
              value={email}
              onChange={onChange}
            />
            <div className="relative ">
              <input
                className="w-full w-[16rem] h-12 px-2 text-grey-600 bg-white border-2 border-gray-300 rounded-md outline-blue-500 transition ease-in-out duration-500 focus:border-blue-500 focus:shadow-md my-6"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
                value={password}
                onChange={onChange}
              />
              {/* The eye icon to show and hide the password */}
              {showPassword ? (
                <BsEyeFill className="absolute bottom-10 right-2 w-6 h-6" />
              ) : (
                <BsEyeSlashFill className="absolute bottom-10 right-2 w-6 h-6" />
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
