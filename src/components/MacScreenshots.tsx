import Image from 'next/image';
import finder from '../assets/macos_finder.png';
import terminal from '../assets/macos_terminal.png';

const MacScreenshots = () => {
    return(
        <div className="flex flex-row h-1000 -mx-56">
            <Image src={finder} alt='MacOS Finder' height={500} style={{ objectFit: 'contain' }} />
            <Image src='/arrow.svg' alt='Arrow' width={100} height={50} />
            <Image src={terminal} alt="MacOS Terminal" height={500} style={{ objectFit: 'contain' }} />
        </div>
    );
};

export default MacScreenshots;