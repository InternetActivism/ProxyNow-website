import Image from "next/image";

const ButtonDownload = () => {
    const openUrlInNewTab = (url: string) => {
      window.open(url, '_blank', 'noopener,noreferrer')
    };

    return (
      <div className="flex flex-row items-center">
        <button className="inline-flex items-center bg-[#0085FF] hover:bg-blue-700 text-white py-2 rounded-full px-1">
        
            
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
              onClick={() => openUrlInNewTab('https://github.com/InternetActivism/ProxyNow')}
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default ButtonDownload;