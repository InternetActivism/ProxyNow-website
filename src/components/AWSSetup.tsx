import { setupCopy, troubleshootingSteps } from "../utils/constants";
import CodeSnippet from "./CodeSnippet";
import SetupStep from "./SetupStep";
import SetupStepText from "./SetupStepText";

const AWSSetup = () => {
    const copy = setupCopy['AWS'];
    const troubleshooting = troubleshootingSteps['AWS'];

    return (
        <div>
            <SetupStep step={1} stepData={copy[0]} />
            <SetupStep step={2} stepData={copy[1]} />
            <SetupStep step={3} stepData={copy[2]} />
            <SetupStep step={4} stepData={copy[3]} >
                <>
                    <p className="text-black text-sm sm:text-md md:text-lg lg:text-xl text-opacity-90 hover:text-opacity-100 transition-all whitespace-pre-line">
                        {`Ensure that the EC2 instance is running by checking the "Instance state" on the instances dashboard. If it is not running click on then container then press "Actions" and then click on "Start".

                        Take note of the Public IPv4 DNS of the instance. You can find this on the instances dashboard under the "Public IPv4 DNS" column.
                
                        Open a terminal and navigate to the directory where you saved the .pem file. Run the following command to make sure your key is not publicly viewable:`}
                    </p>
                    <CodeSnippet text={`chmod 400 <your-key-name>.pem`} />
                    <p className="text-black text-sm sm:text-md md:text-lg lg:text-xl text-opacity-90 hover:text-opacity-100 transition-all whitespace-pre-line">
                        {`Now you can SSH into the instance using the following command:`}
                    </p>
                    <CodeSnippet text={`ssh -i <your-key-name>.pem ubuntu@<public-ipv4-dns>`} />
                    <p className="text-black text-sm sm:text-md md:text-lg lg:text-xl text-opacity-90 hover:text-opacity-100 transition-all whitespace-pre-line">
                        {`You should now be connected to the EC2 instance. Before we run any commands, switch to superuser by running the following command:`}
                    </p>
                    <CodeSnippet text={`sudo su`} />
                    <SetupStepText>
                        {`Now we can clone the proxy repository. Run the following command to download the proxy:`}
                    </SetupStepText>
                    <CodeSnippet text={`git clone https://github.com/InternetActivism/ProxyNow.git`} />
                    <SetupStepText>
                        {`Run the following command to allow us to run the proxy script:`}
                    </SetupStepText>
                    <CodeSnippet text={`cd ProxyNow/scripts && chmod u+x ./Linux.sh`} />
                    <SetupStepText>
                        {`Now we can run the proxy script with the following command:`}
                    </SetupStepText>
                    <CodeSnippet text={`./Linux.sh`} />
                    <SetupStepText className="pb-10">
                        {`Your proxy is now running! You can test it by connecting to the proxy address displayed in the terminal. Please consider registering your proxy on our list to help people who need it.`}
                    </SetupStepText>
                </>
            </SetupStep>
        </div>
    )
};

export default AWSSetup;