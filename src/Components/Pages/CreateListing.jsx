import { useState } from "react";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: true,
    address: "",
    description: "",
    offer: true,
    regularPrice: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
  } = formData;

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
          className="w-full mb-6 px-4 py-2 mt-2 text-md  text-gray-700 bg-white border-2 border-grey-300 rounded transition ease-in-out outline-none focus:text-grey-700 focus:bg-white focus:border-slate-600 mb-6"
        />

        <div className="flex space-x-6">
          <div>
            <p className="text-lg font-semibold">Bedrooms</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              className="w-full h-9 outline-none text-center  px-4 py-2 text-xl text-gray-700 bg-white border-2 border-grey-700 rounded transition duration-150 ease-in-out focus:text-grey-700 focus:bg-white focus:outline-none focus:border-slate-600"
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
              className="w-full h-9 outline-none text-center px-4 py-2 text-xl text-gray-700 bg-white border-2 border-grey-700 rounded transition duration-150 ease-in-out focus:text-grey-700 focus:bg-white focus:outline-none focus:border-slate-600"
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
        <p className="text-lg font-semibold">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          required
          className="w-full mb-6 px-4 py-2  text-md  text-gray-700 bg-white border-2 border-grey-300 rounded transition ease-in-out outline-none focus:text-grey-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Description</p>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="Description"
          required
          className="w-full mb-6 px-4 py-2 text-md  text-gray-700 bg-white border-2 border-grey-300 rounded transition ease-in-out outline-none focus:text-grey-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Offer</p>

        <div className="flex mb-6">
          <button
            type="button"
            id="offer"
            value={true}
            onClick={onchange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg  active:shadow-lg transition duration-150 ease-in-out w-full ${
              !offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}>
            yes
          </button>

          <button
            type="button"
            id="offer"
            value={true}
            onClick={onchange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg  active:shadow-lg transition duration-150 ease-in-out w-full ${
              offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}>
            no
          </button>
        </div>
        <div className="flex items-center mb-6">
          <div className="">
            <p className="text-lg font-semibold ">Regular Price </p>
            <div className="flex w-full justify-center items-center space-x-6"> 
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                className="w-full mb-6 px-4 py-2 text-md  text-gray-700 bg-white border-2 border-grey-300 rounded transition ease-in-out outline-none focus:text-grey-700 focus:bg-white focus:border-slate-600 text-center"
                onChange={onChange}
                min="50"
                max="400000000"
                required
              />
              {type === "rent" && (
                <div>
                  <p className="text-md w-full whitespace-nowrap mb-5 text-gray-600">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
