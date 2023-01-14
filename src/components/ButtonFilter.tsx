import Image from "next/image";
import React from "react";
import { FilterName } from "../pages/list";

type FilterData = {
    text: FilterName,
    svg?: string,
    selectedClassNames: string,
    unselectedClassNames: string
}

interface Props {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<FilterName>>;
}

const ButtonFilter = ({ filter, setFilter }: Props) => {
    const filters: FilterData[] = [
        {
            text: 'All Proxies',
            selectedClassNames: 'bg-[#0085FF] text-white',
            unselectedClassNames: 'bg-[#F0F0F0] hover:bg-[#0085FF]/70 hover:text-white'
        },
        {
            text: 'WhatsApp',
            svg: '/whatsapp.svg',
            selectedClassNames: 'bg-green-500 text-white',
            unselectedClassNames: 'bg-[#F0F0F0] text-[#25D366] hover:bg-green-500/70 hover:text-white'
        },
        {
            text: 'Telegram',
            svg: '/telegram.svg',
            selectedClassNames: 'bg-[#229ED9] text-white',
            unselectedClassNames: 'bg-[#F0F0F0] text-[#229ED9] hover:bg-[#229ED9]/70 hover:text-white'
        }
    ];
    
    return(
        <div className="flex flex-col gap-3">
            {filters.map((filterInfo) => {
                return (
                    <label 
                        key={filterInfo.text}
                        htmlFor={`${filterInfo.text}-radio`}
                        className={`flex items-center justify-center py-2 rounded-xl w-28 sm:w-32 md:w-36 lg:w-44 ${filter === filterInfo.text ? filterInfo.selectedClassNames : filterInfo.unselectedClassNames}`}
                        onClick={() => setFilter(filterInfo.text)}
                    >
                        <input 
                            type='radio'
                            className='hidden'
                            id={`${filterInfo.text}-radio`}
                            value=''
                            name='filter-radio'
                        />
                        {filterInfo.svg ? (
                            <div className="px-1">
                                <Image src={filterInfo.svg} alt={filterInfo.text} width={24} height={24} />
                            </div>
                        ) : null}
                        <label className="font-medium text-xs sm:text-sm md:text-md lg:text-lg">
                            {filterInfo.text}
                        </label>
                    </label>
                );
            })}
        </div>
    );
};

export default ButtonFilter;
