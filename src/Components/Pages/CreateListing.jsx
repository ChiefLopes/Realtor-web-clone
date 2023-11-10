import { useState } from "react";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: true,
  });

  const { type, name, bedrooms, bathrooms, parking, furnished } = formData;

  function onChange(e) {}

  return (
    <main className="max-w-md mx-auto px-2">
      <h1 className="text-3xl font-bold text-center mt-4 ">Create a Listing</h1>
      <form>
        <p className="text-lg font-semibold mt-6">Sell / Rent</p>

        <div className="flex py-4">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onchange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg  active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}>
            Sell
          </button>

          <button
            type="button"
            id="type"
            value="sale"
            onClick={onchange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg  active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "sale"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}>
            Rent
          </button>
        </div>
        <p className="text-lg font-semibold">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Property Name"
          maxLength="32"
          minLength="10"
          required
          className="w-full mb-6 px-4 py-2 mt-2 text-md  text-grey-700 bg-white border-2 border-grey-300 rounded transition ease-in-out outline-none focus:text-grey-700 focus:bg-white focus:border-slate-600 mb-6"
        />

        <div className="flex space-x-6">
          <div>
            <p className="text-lg font-semibold">Bedrooms</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              className="w-full h-9 outline-none text-center  px-4 py-2 text-xl text-grey-700 bg-white border-2 border-grey-700 rounded transition duration-150 ease-in-out focus:text-grey-700 focus:bg-white focus:outline-none focus:border-slate-600"
              min="1"
              max="50"
              required
              onChange={onChange}
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Bathrooms</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              className="w-full h-9 outline-none text-center px-4 py-2 text-xl text-grey-700 bg-white border-2 border-grey-700 rounded transition duration-150 ease-in-out focus:text-grey-700 focus:bg-white focus:outline-none focus:border-slate-600"
              min="1"
              max="50"
              required
              onChange={onChange}
            />
          </div>
        </div>
        <p className="text-lg font-semibold mt-6">Parking Spot</p>

        <div className="flex py-4">
          <button
            type="button"
            id="parking"
            value={true}
            onClick={onchange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg  active:shadow-lg transition duration-150 ease-in-out w-full ${
              !parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}>
            yes
          </button>

          <button
            type="button"
            id="parking"
            value={false}
            onClick={onchange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg  active:shadow-lg transition duration-150 ease-in-out w-full ${
              parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}>
            no
          </button>
        </div>
        <p className="text-lg font-semibold mt-6">Furnished</p>

        <div className="flex py-4">
          <button
            type="button"
            id="furnished"
            value={true}
            onClick={onchange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg  active:shadow-lg transition duration-150 ease-in-out w-full ${
              !furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}>
            yes
          </button>

          <button
            type="button"
            id="furnished"
            value={true}
            onClick={onchange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg  active:shadow-lg transition duration-150 ease-in-out w-full ${
              furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}>
            no
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
