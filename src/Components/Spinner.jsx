import SpinnerSVG from "../assets/svg/Spinner.svg";
const Spinner = () => {
  return (
    <div className="bg-zinc-900 bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-50">
      <div>
        <img src={SpinnerSVG} alt="Loading" className="h-24" />
      </div>
    </div>
  );
};

export default Spinner;
