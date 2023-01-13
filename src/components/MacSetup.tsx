import { setupCopy, troubleshootingSteps } from "../utils/constants";
import ButtonBlue from "./ButtonBlue";
import ButtonDownload from "./ButtonDownload";
import MacScreenshots from "./MacScreenshots";
import TroubleshootingRow from "./TroubleshootingRow";
import TroubleshootingText from "./TroubleshootingText";

const MacSetup = () => {
    const copy = setupCopy['Mac'];
    const troubleshooting = troubleshootingSteps['Mac'];

    const stepData = (index: number, children?: JSX.Element) => {
        return(
            <div className="flex flex-row w-full px-4 pb-0 pt-10 sm:px-12 md:px-28 lg:px-36 mx-auto max-w-screen-xl">
                <div className="flex items-center justify-center shadow-sm bg-blue-500 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 lg:p-2 rounded-full text-center">
                    <p className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">{index + 1}</p>
                </div>

                <div className="pl-5 w-full">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black pb-4 w-full">{copy[index].title}</h1>
                    <p className="text-black text-sm sm:text-md md:text-lg lg:text-xl text-opacity-90 hover:text-opacity-100 transition-all pb-3">{copy[index].body}</p>
                    {children}
                </div>
            </div>
        );
    };

    return (
        <div>
            {stepData(0, <ButtonDownload />)}
            {stepData(1, <MacScreenshots />)}
            {stepData(2, <ButtonBlue text={"Register Your Proxy"}  svgD="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z"/>)}
            <div className="flex flex-col w-full px-4 pb-0 sm:pt-10 sm:px-12 md:px-28 lg:px-36 mx-auto max-w-screen-xl">
                <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl text-black lg:text-4xl pt-20 pb-2">
                    Having Trouble?
                </h1>
                <div className="pt-4 sm:pt-8">
                    {troubleshooting.map(( content ) => 
                        <TroubleshootingRow
                            key={content.title}
                            title={content.title}
                            body={
                                <TroubleshootingText
                                    body={content.body}
                                />
                            }
                        />
                    )}
                </div>
            </div>
        </div>
    )
};

export default MacSetup;