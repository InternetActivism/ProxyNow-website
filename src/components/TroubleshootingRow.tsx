import Image from "next/image";
import { useRef, useState } from "react";
import PlusIcon from '../../public/plusIcon.svg';

const ICON_SIZE: number = 25;

interface Props {
    title: string,
    body: JSX.Element
}

const TroubleshootingRow = ({title, body}: Props) => {
    const [expanded, setExpanded] = useState(false);
    const stepRef = useRef<HTMLDivElement>(null);

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
            <div 
                className="pt-4 transition-height duration-500 ease-in-out overflow-hidden"
                ref={stepRef}
                style={{ height: expanded ? stepRef.current?.scrollHeight : '0px' }}
            >
                { body }
            </div>
        </div>
    );
};

export default TroubleshootingRow;