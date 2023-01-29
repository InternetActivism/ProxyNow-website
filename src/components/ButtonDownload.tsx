import Image from "next/image";

interface Props {
    platform: 'Mac' | 'Linux';
}

const downloadURL: {[key in 'Mac' | 'Linux']: string} = {
    'Mac': 'https://firebasestorage.googleapis.com/v0/b/proxynow-c699d.appspot.com/o/Mac%2FProxyNow.zip?alt=media&token=2a2dac6a-f280-4a24-8cfc-fee2b2ecd252',
    'Linux': 'https://firebasestorage.googleapis.com/v0/b/proxynow-c699d.appspot.com/o/Linux%2FProxyNow.zip?alt=media&token=e5ecfbc0-6811-443a-8828-03f349b9945f'
};

const githubURL: {[key in 'Mac' | 'Linux']: string} = {
    'Mac': 'https://github.com/InternetActivism/ProxyNow/tree/mac',
    'Linux': 'https://github.com/InternetActivism/ProxyNow/tree/linux'
};

const ButtonDownload = ({ platform }: Props) => {
    const openUrlInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer')
    };

    return (
        <div className="flex flex-row items-center">
            <button 
                className="inline-flex items-center bg-[#0085FF] hover:bg-blue-700 text-white py-2 rounded-full px-1"
                onClick={() => openUrlInNewTab(downloadURL[platform])}
            >
                <div className="flex items-center justify-center mx-auto">
                    <div className="text-xs sm:text-sm md:text-md lg:text-lg pl-3 sm:pl-4 lg:pl-6">
                        Download
                    </div>
                    <div className="pl-2 pr-3 sm:pr-4 lg:pr-6">
                        <Image src="/download.svg" alt="logo" width={16} height={16} />
                    </div>
                </div>
            </button>
            <div className="pl-2">
            <p className="text-black/70 text-black text-xs sm:text-sm md:text-md lg:text-lg">{'or view the source code on '}
                <a 
                className="text-primary underline cursor-pointer" 
                onClick={() => openUrlInNewTab(githubURL[platform])}
                >
                    GitHub
                </a>
            </p>
            </div>
        </div>
    );
  };
  
  export default ButtonDownload;