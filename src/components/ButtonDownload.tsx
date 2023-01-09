import Image from "next/image";

const ButtonDownload = () => {
    return (
      <>
        <button className="inline-flex items-center bg-[#0085FF] hover:bg-blue-700 text-white py-2 rounded-full px-1">
        
            
            <div className="flex items-center justify-center mx-auto">
                <div className="font-medium text-xs sm:text-sm md:text-md lg:text-lg pl-3 sm:pl-4 lg:pl-6">
                    Download
                </div>
                <div className="pl-2 pr-3 sm:pr-4 lg:pr-6">
                <Image src="/download.svg" alt="logo" width={16} height={16} />
                </div>
            </div>
        </button>
      </>
    );
  };
  
  export default ButtonDownload;