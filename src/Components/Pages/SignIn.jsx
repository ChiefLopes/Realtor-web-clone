import handWithKey from "../../../public/assets/hand-key.avif";

const SignIn = () => {
  return (
    <section>
      <h1 className="text-4xl font-bold text-center mt-6">Sign In</h1>

      {/* this div houses both the image and the form sections */}
      <div>
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src={handWithKey}
            alt="handwithkey"
            className="w-full rounded-2xl"
          />
        </div>
        {/* For the image */}
        <div className="w-full md:w-[67%] lg:w-[40%]">
          <form>
            <input className="w-full" type="text" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
