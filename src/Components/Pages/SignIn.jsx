import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import handWithKey from "../../../src/assets/hand-key.avif";
import OAuth from "../Sections/OAuth";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-toastify";


const SignIn = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    // Created the form data hook
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // Created a function to update the form data
    const { email, password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            // updated the form data so that whatever is typed into the input field is stored in the form data object.
            [e.target.id]: e.target.value,
        }));
    };
    
    async function onSubmit(e) {
        e.preventDefault();
        
        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(
                auth, email, password
            )
            if (userCredential.user) {
             navigate("/")
            }
            
        } catch (error) {
            toast.error("Something went wrong!")
        }
    }


        return (
          <section>
            <h1 className="text-4xl font-bold text-center mt-4">Sign In</h1>

            {/* this div houses both the image and the form sections */}
            <div className="flex justify-center  flex-wrap items-center py-12 px-6 max-w-5xl mx-auto">
              <div className="md:w-[67%] lg:w-[40%] mb-12 md:mb-6 ">
                <img
                  src={handWithKey}
                  alt="handWithKey"
                  className="w-full rounded-2xl h-[23rem] object-cover w-[50rem]"
                />
              </div>
              {/* For the image */}
              <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 ">
                <form onSubmit={onSubmit}>
                  <input
                    className="w-full w-[16rem] h-12 px-2 text-grey-600 bg-white border-2 border-gray-300 rounded-md outline-blue-500 transition ease-in-out duration-500 focus:border-blue-500 focus:shadow-md"
                    type="email"
                    placeholder="Email address"
                    id="email"
                    value={email}
                    onChange={onChange}
                  />
                  <div className="relative mb-6">
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
                      <BsEyeSlashFill
                        className="absolute top-[35px] right-4 text-zinc-900 text-2xl cursor-pointer"
                        onClick={() =>
                          setShowPassword((prevState) => !prevState)
                        }
                      />
                    ) : (
                      <BsEyeFill
                        className="absolute top-[35px] right-4 text-zinc-900 text-2xl cursor-pointer"
                        onClick={() =>
                          setShowPassword((prevState) => !prevState)
                        }
                      />
                    )}
                    <div className="flex justify-between whitespace-nowrap md:text-sm sm:text-lg">
                      <p>
                        Don&apos;t have an account?{" "}
                        <Link
                          to="/sign-up"
                          className="text-red-500 hover:text-red-700 transition ease-in-out duration-500">
                          Register
                        </Link>
                      </p>
                      <p className="text-blue-500">
                        <Link
                          to="/forgot-password"
                          className="text-blue-500 hover:text-blue-800 transition ease-in-out duration-500">
                          Forgot Password?
                        </Link>
                      </p>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium shadow-md uppercase font-bold py-2 px-4 rounded w-full transition ease-in-out duration-150 hover:shadow-lg active:bg-blue-800">
                    Sign In
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
    }


    
export default SignIn;
