const ButtonFilter = (props) => {
    var svg;
    if (props.svg) {
        svg = <div className="px-1">
                {props.svg}
            </div>
            
    } else {
        svg = <div className="pl-3 sm:pl-4 lg:pl-6"></div>
    }

    return(
        <>
        <button className={`flex proxy-button ${props.fill} hover:${props.selectedColor} text-${props.textColor} py-2 rounded-xl w-44`}>
            <div className="flex items-center justify-center mx-auto">
                {svg}
                <div className="font-medium text-xs sm:text-sm md:text-md lg:text-lg pr-3 sm:pr-4 lg:pr-6">
                    {props.text}
                </div>
            </div>
        </button>
        </>
    );
};

export default ButtonFilter;