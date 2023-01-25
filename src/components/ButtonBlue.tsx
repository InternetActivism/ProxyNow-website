interface Props {
  small?: boolean;
  text: string;
  svgD?: string;
  onClick?: () => void;
}

const ButtonBlue = (props: Props) => {
  if (props.small) {
    return (
      <>
        <button className="inline-flex items-center bg-[#0085FF] hover:bg-blue-700 text-white p-2 rounded-full " onClick={props.onClick}>
          <div
            className={
              "text-xs sm:text-xs md:text-sm lg:text-md pl-1 sm:pl-2 lg:pl-3"
            }
          >
            {props.text}
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z"
              fill="white"
            />
          </svg>
        </button>
      </>
    );
  }
  return (
    <>
      <button className="inline-flex items-center bg-primary hover:bg-blue-700 text-white py-2 rounded-full px-1" onClick={props.onClick}>
        <div
          className={"text-xs sm:text-sm md:text-md lg:text-lg pl-3 sm:pl-4 lg:pl-6"}
        >
          {props.text}
        </div>
        <svg
          className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px]"
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
