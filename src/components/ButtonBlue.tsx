const ButtonBlue = (props) => {
  return (
    <>
      <button className="inline-flex items-center bg-[#0085FF] hover:bg-blue-700 text-white py-2 rounded-full px-1">
        <div className="text-xs sm:text-sm md:text-md lg:text-lg pl-3 sm:pl-4 lg:pl-6">
          {props.text}
        </div>
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d={props.svgD}
            fill="white"
          />
        </svg>
      </button>
    </>
  );
};

export default ButtonBlue;
