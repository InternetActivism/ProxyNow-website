export const navLinks = [
  {
    name: "Set up Proxy",
    href: "/setup",
  },
  {
    name: "Share Proxy",
    href: "/register",
  },
  {
    name: "Use Proxy",
    href: "/use",
  },
];

export const languages = [
  {
    name: "English",
    code: "en",
  },
  {
    name: "فارسی",
    code: "fa",
  },
];

export type Step = {
  title: string;
  body: string;
};

export const setupCopy: { Mac: Step[]; Linux: Step[]; AWS: Step[] } = {
  Mac: [
    {
      title: "Download Our Proxy Setup Tool",
      body: "For a quick and easy proxy setup simply download and run our script",
    },
    {
      title: "Run The Proxy",
      body: "Unzip the downloaded folder and open it then navigate to scripts folder and open the MacOS-whatsapp.command file. This will start the proxy in Terminal.",
    },
    {
      title: "Share Your Proxy Address",
      body: "That’s it, you now have a working proxy! Share the address displayed at the bottom of the Terminal to allow others to connect to your proxy. If you have a proxy but didn't use our tool, please consider registering your proxy on our list to help people find it.",
    },
  ],
  Linux: [
    {
      title: "Download Our Proxy Setup Tool",
      body: "For a quick and easy proxy setup simply download and run our script",
    },
    {
      title: "Run The Proxy",
      body: "Unzip the downloaded folder and open a terminal at the ProxyNow folder.",
    },
    {
      title: "Share Your Proxy Address",
      body: "That’s it, you now have a working proxy! Share the address displayed at the bottom of the Terminal to allow others to connect to your proxy. If you have a proxy but didn't use our tool, please consider registering your proxy on our list to help people find it.",
    },
  ],
  AWS: [
    {
      title: "Setup an AWS Account",
      body: `You will need an AWS account to run the proxy. If you don't have one, you can create one for free.
            
             Please note if you are not eligible for the free tier, you will be charged for running the proxy. Please check the AWS pricing page for more information.`,
    },
    {
      title: "Create a VPC",
      body: `The first step is creating a VPC (Virtual Private Cloud) which will be used by the container running the proxy.

            Head over to the AWS console and search for VPC and click it. On the left sidebar click on “Your VPCs” and then click on “Create VPC”.

            Use the following settings:
      `,
    },
    {
      title: "Setup an EC2 Instance",
      body: `The next step is to create an EC2 instance which will host the proxy.`,
    },
    {
      title: "Connect to the EC2 Instance (Linux or Mac)",
      body: `The next step is to connect to the EC2 instance we created.`,
    },
    {
      title: "Connect to the EC2 Instance (Windows)",
      body: `The next step is to connect to the EC2 instance we created.`,
    },
    {
      title: "Run the Proxy on your Container",
      body: `The next step is to run the proxy on our container`,
    },
  ],
};

type TroubleshootingContent = {
  title: string;
  body: string;
};

export const troubleshootingSteps: {
  Mac: TroubleshootingContent[];
  Linux: TroubleshootingContent[];
  AWS: TroubleshootingContent[];
} = {
  Mac: [
    {
      title: `I received the error “Unable to automatically map ports”`,
      body: `This error means that the script attempted port forwarding automatically but failed. This step is required to allow external devices to send information to your computer and access the proxy. Port forwarding can also be done manually through your router’s settings. Every router’s interface is different but here are some general steps:
                                
      1. Log in to your router's web-based interface by entering its IP address into a web browser.
      2. Look for a menu labeled "Port Forwarding" or "Virtual Servers." This is typically found under a section called "Advanced" or "Firewall."
      3. Create a new rule using the IP in the error message as the local IP address and set the port number to 443 and 1080.
      4. Save the new rule. You may have to reboot your router for the changes to take effect.
      
      For more information on how to perform port forwarding, search online for your router’s model or contact your ISP.`,
    },
    {
      title: `My proxy is running but I can’t connect to it on WhatsApp`,
      body: `This can happen for a number of reasons. Here are some common issues which could cause this to happen:
                                
      • Your phone is on the same network as your proxy.
      • Port forwarding has not been configured correctly. For more information on port forwarding see the troubleshooting step: I received the error “Unable to automatically map ports.”
      • Your proxy is not running. Open the Docker app and check that the whatsapp-proxy container is running.

      You can also check for any errors that occurred while running the script by viewing the full log located in the logs directory of the downloaded folder.`,
    },
  ],
  Linux: [
    {
      title: `I received the error “Unable to automatically map ports”`,
      body: `This error means that the script attempted port forwarding automatically but failed. This step is required to allow external devices to send information to your computer and access the proxy. Port forwarding can also be done manually through your router’s settings. Every router’s interface is different but here are some general steps:
                                
      1. Log in to your router's web-based interface by entering its IP address into a web browser.
      2. Look for a menu labeled "Port Forwarding" or "Virtual Servers." This is typically found under a section called "Advanced" or "Firewall."
      3. Create a new rule using the IP in the error message as the local IP address and set the port number to 443 and 1080.
      4. Save the new rule. You may have to reboot your router for the changes to take effect.
      
      For more information on how to perform port forwarding, search online for your router’s model or contact your ISP.`,
    },
    {
      title: `My proxy is running but I can’t connect to it on WhatsApp`,
      body: `This can happen for a number of reasons. Here are some common issues which could cause this to happen:
                                
      • Your phone is on the same network as your proxy.
      • Port forwarding has not been configured correctly. For more information on port forwarding see the troubleshooting step: I received the error “Unable to automatically map ports.”
      • Your proxy is not running. Open the Docker app and check that the whatsapp_proxy container is running.

      You can also check for any errors that occurred while running the script by viewing the full log located in the logs directory of the downloaded folder.`,
    },
  ],
  AWS: [],
};
