import Image from "next/image";
import { useState } from "react";
import PlusIcon from '../../public/plusIcon.svg';

const ICON_SIZE: number = 25;

interface Props {
    title: string,
    body: JSX.Element
}

const TroubleshootingRow = ({title, body}: Props) => {
    const [expanded, setExpanded] = useState(false);

    return(
        <div className="pb-5 sm:pb-10">
            <div className="flex flex-row justify-between cursor-pointer" onClick={() => setExpanded(!expanded)}>
                <p className={`text-md sm:text-lg md:text-xl ${expanded && 'text-primary font-medium'}`}>
                    {title}
                </p>
                <div className={`flex justify-center items-center pl-5`}>
                <Image
                    src={expanded ? '/minusIcon.svg' : '/plusIcon.svg'}
                    alt={expanded ? 'Show less' : 'Show more'}
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                />
                </div>
            </div>
            {expanded &&
                <div className="pt-4">
                    { body }
                </div>}
        </div>
    );
};

export default TroubleshootingRow;