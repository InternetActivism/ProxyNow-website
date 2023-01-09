import ButtonBlue from "./ButtonBlue";

const MacSetup = (props) => {
    return (
        <>
            <div>
                    <div className="flex pl-2 sm:pl-2 md:pl-5 lg:pl-40 pt-5">
                        <div className="flex items-center justify-center shadow-sm bg-blue-500 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 lg:p-4 rounded-full text-center">
                            <p className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">1</p>
                        </div>

                        <div className="pr-4 sm:pr-4 md:pr-10 lg:pr-80 pl-1 pt-0 md:pl-2 md:pt-1 lg:pl-3 lg:pt-2">
                            <h1 className="inline-block font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2">Download Our Proxy Setup Tool</h1>
                            <p className="text-black text-xs sm:text-sm md:text-md lg:text-lg text-opacity-90 hover:text-opacity-100 transition-all">For a quick and easy Proxy setup simply download and run our script</p>
                        </div>
                    </div>

                    <div className="flex pl-2 sm:pl-2 md:pl-5 lg:pl-40 pt-5">
                        <div className="flex shrink-0 items-center justify-center shadow-sm bg-blue-500 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 sm:p-1 md:p-3 lg:p-4 rounded-full text-center">
                            <p className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">2</p>
                        </div>
                        <div className="pr-4 sm:pr-4 md:pr-10 lg:pr-80 pl-1 pt-0 md:pl-2 md:pt-1 lg:pl-3 lg:pt-2">
                            <h1 className="inline-block font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2">Run The Proxy</h1>
                            <p className="text-black text-xs sm:text-sm md:text-md lg:text-lg text-opacity-90 hover:text-opacity-100 transition-all">Open the downloaded folder and navigate to scripts folder then open the MacOS-whatsapp.sh file. This will start the proxy in Terminal.</p>
                        </div>
                    </div>
                    
                    <div className="flex pl-2 sm:pl-2 md:pl-5 lg:pl-40 pt-5">
                        <div className="flex shrink-0 items-center justify-center shadow-sm bg-blue-500 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full text-center">
                            <p className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">3</p>
                        </div>
                        <div className="pr-4 sm:pr-4 md:pr-10 lg:pr-80 pl-1 pt-0 md:pl-2 md:pt-1 lg:pl-3 lg:pt-2">
                            <h1 className="inline-block font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2">Share Your Proxy Address</h1>
                            <p className="text-black text-xs sm:text-sm md:text-md lg:text-lg text-opacity-90 hover:text-opacity-100 transition-all pb-3">That’s it, you now have a working proxy! Share the address displayed at the bottom of the Terminal to allow others to connect to your proxy. Please consider registering your proxy on our list to help people find it.</p>
                            <ButtonBlue text={"Register Your Proxy"} />
                        </div>
                    </div>
                </div>
        </>
    )
};

export default MacSetup;