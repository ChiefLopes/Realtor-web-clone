import { useState } from "react";

const Profile = () => {
    const [formData,  setFormData] = useState({
        name: "Louis Peace",
        email: "chieflopesekede@gmail.com"
    });
    
    const {name, email} = formData
  return (
    <>
      <section>
              <h1 className="text-3xl font-bold text-center mt-4">My Profile</h1>
              <div className="flex column">
                  <form>
                      {/* Name Input */}
                      <input type="text" id="name" value={name} disabled className="w-full px-4 py-2 text-xl text-grey-700 bg-white border-2 border-grey-300"  />
                      
                      {/* email input */}
                      <input type="email" id="email" value={email} disabled className="w-full"/>
                  </form>
              </div>
      </section>
    </>
  );
}

export default Profile