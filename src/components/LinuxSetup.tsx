import { setupCopy, troubleshootingSteps } from "../utils/constants";
import ButtonBlue from "./ButtonBlue";
import ButtonDownload from "./ButtonDownload";
import CodeSnippet from "./CodeSnippet";
import SetupStep from "./SetupStep";
import SetupStepText from "./SetupStepText";
import TroubleshootingRow from "./TroubleshootingRow";
import TroubleshootingText from "./TroubleshootingText";

const LinuxSetup = () => {
    const copy = setupCopy['Linux'];
    const troubleshooting = troubleshootingSteps['Linux'];

    return (
        <div>
            <SetupStep step={1} stepData={copy[0]} >
                <ButtonDownload />
            </SetupStep>
            <SetupStep step={2} stepData={copy[1]} >
                <>
                    <SetupStepText>
                        Enter superuser mode before running the script:
                    </SetupStepText>
                    <CodeSnippet text="sudo su" />
                    <SetupStepText>
                        Open the scripts directory:
                    </SetupStepText>
                    <CodeSnippet text="cd scripts" />
                    <SetupStepText>
                        Allow the script to be executed:
                    </SetupStepText>
                    <CodeSnippet text="chmod u+x Linux.sh" />
                    <SetupStepText>
                        Run the script:
                    </SetupStepText>
                    <CodeSnippet text="./Linux.sh" />
                </>
            </SetupStep>
            <SetupStep step={3} stepData={copy[2]} >
                <ButtonBlue text={"Register Your Proxy"}  svgD="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z"/>
            </SetupStep>
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

export default LinuxSetup;