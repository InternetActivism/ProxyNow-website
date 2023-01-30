import Image from "next/image";
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
            <SetupStep step={2} stepData={copy[1]} >
                <>
                    <div className="w-full flex flex-row justify-center pb-5">
                        <img
                            className="object-contain w-1/2"
                            src="/vpc-settings.png"
                            alt="VPC Settings"
                        />
                    </div>
                    <SetupStepText>
                        {`Click on “Create VPC”.`}
                    </SetupStepText>
                </>
            </SetupStep>
            <SetupStep step={3} stepData={copy[2]} >
                <>
                    <SetupStepText>
                        {`Before starting the instance we need to create a key pair which will allow us to SSH into the instance. Head over to the AWS console and search for EC2 and click it. On the left sidebar click on “Key Pairs” and then click on “Create Key Pair”.

                        Use the following settings:`}
                    </SetupStepText>
                    <div className="w-full flex flex-row justify-center py-5">
                        <img
                            className="object-contain w-2/3"
                            src="/create-key-pair.png"
                            alt="Create Key Pair"
                        />
                    </div>
                    <SetupStepText>
                        {`Note: If you are on Windows select .ppk for Private key file format and install PuTTY.
                        
                        Give the key pair a name and click on “Create Key Pair”. This will download a .pem file which you should save on your computer and not share.

                        Next, we can start up the EC2 instance. Head over to the AWS console and search for EC2 and click it. On the left sidebar click on “Instances” and then click on “Launch Instance”.

                        Use the following settings:`}
                    </SetupStepText>
                    <div className="w-full flex flex-row justify-center py-5">
                        <img
                            className="object-contain w-2/3"
                            src="/ec2-os.png"
                            alt="EC2 Instance Setup"
                        />
                    </div>
                    <SetupStepText>
                        {`For key pair select the key pair you created in the previous step.`}
                    </SetupStepText>
                    <div className="w-full flex flex-row justify-center py-5">
                        <img
                            className="object-contain w-2/3"
                            src="/ec2-key-pair.png"
                            alt="EC2 Instance Setup (Key Pair)"
                        />
                    </div>
                    <SetupStepText>
                        {`Under network settings select the VPC you created and the subnet associated with it.`}
                    </SetupStepText>
                    <div className="w-full flex flex-row justify-center py-5">
                        <img
                            className="object-contain w-2/3"
                            src="/ec2-network.png"
                            alt="EC2 Instance Setup (Network Settings)"
                        />
                    </div>
                    <SetupStepText>
                        {`Keep note of what you chose for "Security group name" as we will need this later. You can now click on "Launch Instance".

                        Right now the instance is running but it does not have the ports open that are required for us to connect to the proxy. To open the ports, go back to the EC2 dashboard and click Security Groups on the left sidebar.

                        Find the security group you created and click on it. Click on "Inbound rules" and then click on "Edit Inbound Rules".

                        Add the following rules to your security group:`}
                    </SetupStepText>
                    <div className="w-full flex flex-row justify-center py-5">
                        <img
                            className="object-contain w-full"
                            src="/security-group.png"
                            alt="Security Group Rules"
                        />
                    </div>
                    <SetupStepText>
                        {`Click on "Save rules".`}
                    </SetupStepText>
                </>
            </SetupStep>
            <SetupStep step='4a' stepData={copy[3]} >
                <>
                    <SetupStepText>   
                        {`Ensure that the EC2 instance is running by checking the "Instance state" on the instances dashboard. If it is not running click on then container then press "Actions" and then click on "Start".

                        Take note of the Public IPv4 DNS of the instance. You can find this on the instances dashboard under the "Public IPv4 DNS" column.
                
                        Open a terminal and navigate to the directory where you saved the .pem file. Run the following command to make sure your key is not publicly viewable:`}
                    </SetupStepText>
                    <CodeSnippet text={`chmod 400 <your-key-name>.pem`} />
                    <SetupStepText>    
                        {`Now you can SSH into the instance using the following command:`}
                    </SetupStepText>
                    <CodeSnippet text={`ssh -i <your-key-name>.pem ubuntu@<public-ipv4-dns>`} />
                </>
            </SetupStep>
            <SetupStep step='4b' stepData={copy[4]} >
                <>
                    <SetupStepText>   
                        {`Ensure that the EC2 instance is running by checking the "Instance state" on the instances dashboard. If it is not running click on the container, press "Actions" and then click on "Start".

                        Take note of the Public IPv4 address of the instance. You can find this on the instances dashboard under the "Public IPv4 address" column.

                        Open PuTTY and navigate to Connection > SSH > Auth > Credentials. For "Private key file for authentication" select the .ppk file you downloaded earlier.

                        Next navigate to Session and enter the Public IPv4 address for Host Name then press open. A window will appear prompting you for a login name. Type "ubuntu" and press enter.`}
                    </SetupStepText>
                </>
            </SetupStep>
            <SetupStep step={5} stepData={copy[5]} >
                <>
                    <SetupStepText>
                        {`You should now be connected to the EC2 instance. Before we run any commands, switch to superuser by running the following command:`}
                    </SetupStepText>
                    <CodeSnippet text={`sudo su`} />
                    <SetupStepText>
                        {`Now we can clone the proxy repository. Run the following command to download the proxy:`}
                    </SetupStepText>
                    <CodeSnippet text={`git clone -b linux https://github.com/InternetActivism/ProxyNow.git`} />
                    <SetupStepText>
                        {`Run the following command to allow us to run the proxy script:`}
                    </SetupStepText>
                    <CodeSnippet text={`cd ProxyNow && chmod u+x start-proxy.sh`} />
                    <SetupStepText>
                        {`Now we can run the proxy script with the following command:`}
                    </SetupStepText>
                    <CodeSnippet text={`./start-proxy.sh`} />
                    <SetupStepText className="pb-10">
                        {`If you recieve a prompt asking if you would like to close a process running on conflicting ports, respond with "y".
                        
                        Your proxy is now running! You can test it by connecting to the proxy address displayed in the terminal. Please consider registering your proxy on our list to help people who need it.`}
                    </SetupStepText>
                </>
            </SetupStep>
        </div>
    )
};

export default AWSSetup;