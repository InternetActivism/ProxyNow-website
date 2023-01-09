import Image from "next/image";
import React from "react";
import { useRef, useEffect } from "react";

const ButtonFilter = (props) => {
    var svg;
    if (props.svg) {
        svg = <div className="px-1">
                <Image src={props.svg} alt="logo" width={24} height={24} />
            </div>
    } else {
        svg = <div className="pl-3 sm:pl-4 lg:pl-6"></div>
    }

    const focusButton = useRef(null);

    useEffect(() => {
        if (props.focusState == "true") {
            focusButton.current.focus();
        }
    }, []);
    
    return(
        <>
        <button ref={focusButton} className={`flex proxy-button ${props.fill} ${props.hoverColor} ${props.textColor} ${props.hoverTextColor} ${props.selectedColor} ${props.selectedTextColor} py-2 rounded-xl w-28 sm:w-32 md:w-36 lg:w-44`}>
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
