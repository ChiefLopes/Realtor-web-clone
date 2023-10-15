import { getAuth } from "firebase/auth";
import { useState } from "react";

const Profile = () => {
    const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  });

  const { name, email } = formData;
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold text-center mt-4 ">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/* Name Input */}
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full mb-6 px-4 py-2 text-xl  text-zinc-700 bg-white border-2 border-grey-300 rounded transition ease-in-out"
            />

            {/* email input */}
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="w-full mb-6 px-4 py-2 text-xl text-zinc-700 bg-white border-2 border-grey-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">
                Do you want to change your name?
                <span className="text-red-500 ml-2  hover:text-red-700 cursor-pointer transition ease-in-out duration-600">
                  Edit
                </span>
              </p>
              <p className="text-blue-600 hover:text-blue-800 cursor-pointer transition ease-in-out duration-600">
                sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
