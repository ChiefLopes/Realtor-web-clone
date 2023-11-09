import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { db } from "../utils/Firebase";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  function onLogOut() {
    auth.signOut();
    navigate("/");
  }
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        //   Update the  display name in firebase authentication
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        //   update name in firestore
        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
      }
      toast.success("Profile details successfully updated");
    } catch (error) {
      toast.error("Could not appply changes to profile");
    }
  }

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
              disabled={!changeDetail}
              onChange={onChange}
              className={`w-full mb-6 px-4 py-2 text-xl  text-zinc-700 bg-white border-2 border-blue-300 rounded transition ease-in-out ${
                changeDetail && "bg-red-200 focus:bg-red-200 border-blue-300"
              }`}
            />
            {/* email input */}
            <input
              type="email"
              id="email"
              value={email}
              disabled={!changeDetail}
              onChange={onChange}
              className={`w-full mb-6 px-4 py-2 text-xl  text-zinc-700 bg-white border-2 border-blue-300 rounded transition ease-in-out ${
                changeDetail && "bg-red-200 focus:bg-red-200 border-blue-300"
              }`}
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">
                Do you want to change your name?
                <span
                  onClick={() => {
                    changeDetail && onSubmit();
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="text-red-500 ml-2  hover:text-red-700 cursor-pointer transition ease-in-out duration-600">
                  {changeDetail ? "Apply Change" : "Edit"}
                </span>
              </p>
              <p
                onClick={onLogOut}
                className="text-blue-600 hover:text-blue-800 cursor-pointer transition ease-in-out duration-600">
                sign out
              </p>
            </div>
          </form>

          <button type="submit" className="w-full bg-blue-600 rounded text-white uppercase px-7 py-2 text-sm font-medium shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 ">
            <Link to="/create-listing"className="flex justify-center items-center" >
              <FcHome className="mr-2 text-3xl bg-red-300 rounded-full p-1"/> Sell Or Rent Your Home
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Profile;
