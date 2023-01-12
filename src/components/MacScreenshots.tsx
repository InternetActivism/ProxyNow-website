import Image from 'next/image';
import finder from '../assets/macos_finder.png';
import terminal from '../assets/macos_terminal.png';

const MacScreenshots = () => {
    return(
        <div className="flex flex-col sm:flex-row sm:-mx-56 max-w-screen">
            <Image className="max-w-screen" src={finder} alt='MacOS Finder' height={500} style={{ objectFit: 'contain' }} />
            <Image className='hidden sm:block' src='/arrow.svg' alt='Arrow' width={100} height={50} />
            <Image className="max-w-screen" src={terminal} alt="MacOS Terminal" height={500} style={{ objectFit: 'contain' }} />
        </div>
    );
};

export default MacScreenshots;