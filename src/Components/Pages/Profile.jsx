import { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "Louis Peace",
    email: "chieflopesekede@gmail.com",
  });

  const { name, email } = formData;
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold text-center mt-4">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/* Name Input */}
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full mb-6 px-4 py-2 text-xl text-grey-700 bg-white border-2 border-grey-300 rounded transition ease-in-out"
            />

            {/* email input */}
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="w-full mb-6 px-4 py-2 text-xl text-grey-700 bg-white border-2 border-grey-300 rounded transition ease-in-out"
                      />
                      
                      <div className="flex justify-between">
                          <p>Do you want to change your name? <span>Edit</span></p>
                          <p>sign out</p>
                      </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
