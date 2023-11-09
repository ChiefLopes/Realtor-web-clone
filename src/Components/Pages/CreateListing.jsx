

const CreateListing = () => {
    function onChange(e) {
         
    }
    
  return (
    <main className="max-w-md mx-auto px-2">
          <h1 className="text-3xl font-bold text-center mt-4 ">Create a Listing</h1>
          <form>
              <p className="text-lg font-semibold mt-6">Sell / Rent</p>
          </form>
          <div>
              <button type="button" id="type" value="sale" onClick={onchange} className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg  active:shadow-lg`}>Sell</button>
               
          </div>
    </main>
  );
}

export default CreateListing