const ButtonBlue = (props) => {
    return(
        <>
        <button className="inline-flex items-center bg-[#0085FF] hover:bg-blue-700 text-white py-2 rounded-full">
            <div className="text-xs sm:text-sm md:text-md lg:text-lg pl-3 sm:pl-4 lg:pl-6">
                {props.text}
            </div>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z" fill="white"/></svg>
        </button>
        </>
    );
};

export default ButtonBlue;