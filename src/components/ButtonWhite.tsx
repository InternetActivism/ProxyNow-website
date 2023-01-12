const ButtonWhite = (props) => {
    return(
        <>
        <button className="group proxy-button inline-flex items-center bg-[white] hover:bg-[#0085FF] hover:text-white text-[#0085FF] border border-[#0085FF] py-2 rounded-full">
            <div className="text-xs sm:text-sm md:text-md lg:text-lg pl-3 sm:pl-4 lg:pl-6">
                {props.text}
            </div>
            <svg 
                className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px]"
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    className="fill-current" 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z" 
                    fill="#0085FF"
                />
            </svg>
        </button>
        </>
    );
};

export default ButtonWhite;