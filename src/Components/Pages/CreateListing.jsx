import { useState } from "react";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
  });

  const { type, name } = formData;

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
          className="w-full mb-6 px-4 py-2 mt-2 text-md  text-zinc-700 bg-white border-2 border-blue-300 rounded transition ease-in-out outline-none "
        />
      </form>
    </main>
  );
};

export default CreateListing;
