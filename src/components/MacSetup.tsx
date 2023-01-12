import ButtonBlue from "./ButtonBlue";
import ButtonDownload from "./ButtonDownload";

const MacSetup = () => {
    const copy: {title: string, body: string}[] = [
        {title: "Download Our Proxy Setup Tool", body: "For a quick and easy Proxy setup simply download and run our script"}, 
        {title: "Run The Proxy", body: "Open the downloaded folder and navigate to scripts folder then open the MacOS-whatsapp.sh file. This will start the proxy in Terminal."}, 
        {title: "Share Your Proxy Address", body: "That’s it, you now have a working proxy! Share the address displayed at the bottom of the Terminal to allow others to connect to your proxy. Please consider registering your proxy on our list to help people find it."}
    ]

    const stepData = (index: number, children?: JSX.Element) => {
        return(
            <div className="flex flex-row w-full px-4  pb-0 pt-10 sm:px-12 md:px-28 lg:px-36 mx-auto max-w-screen-xl">
                <div className="flex items-center justify-center shadow-sm bg-blue-500 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 lg:p-2 rounded-full text-center">
                    <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">{index + 1}</p>
                </div>

                <div className="pl-5  w-full">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black pb-4 w-full">{copy[index].title}</h1>
                    <p className="text-black text-xs sm:text-sm md:text-md lg:text-lg text-opacity-90 hover:text-opacity-100 transition-all pb-3">{copy[index].body}</p>
                    {children}
                </div>
            </div>
        );
    };

    return (
        <div>
            {stepData(0, <ButtonDownload />)}
            {stepData(1)}
            {stepData(2, <ButtonBlue text={"Register Your Proxy"}  svgD="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z"/>)}
            <div className="flex flex-row w-full px-4  pb-0 pt-10 sm:px-12 md:px-28 lg:px-36 mx-auto max-w-screen-xl">
                <h1 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-20 pb-2">
                    Having Trouble?
                </h1>
            </div>
        </div>
    )
};

export default MacSetup;