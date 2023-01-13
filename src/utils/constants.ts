export const navLinks = [
  {
    name: "Proxy List",
    href: "/list",
  },
  {
    name: "Setup a Proxy",
    href: "/setup",
  },
  {
    name: "Register Proxy",
    href: "/register",
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

type Step = {
  title: string,
  body: string
}

export const setupCopy: {'Mac': Step[], 'Linux': Step[], 'Windows': Step[]} = {
  'Mac': [
    {title: "Download Our Proxy Setup Tool", body: "For a quick and easy Proxy setup simply download and run our script"}, 
    {title: "Run The Proxy", body: "Open the downloaded folder and navigate to scripts folder then open the MacOS-whatsapp.sh file. This will start the proxy in Terminal."}, 
    {title: "Share Your Proxy Address", body: "That’s it, you now have a working proxy! Share the address displayed at the bottom of the Terminal to allow others to connect to your proxy. Please consider registering your proxy on our list to help people find it."}
  ],
  'Linux': [],
  'Windows': []
};


type TroubleshootingContent = {
  title: string,
  body: string
}

export const troubleshootingSteps: {'Mac': TroubleshootingContent[], 'Linux': TroubleshootingContent[], 'Windows': TroubleshootingContent[]} = {
  'Mac': [
    {
      title: `I received the error “Unable to automatically map ports”`,
      body: `This error means that the script attempted port forwarding automatically but failed. This step is required to allow external devices to send information to your computer and access the proxy. Port forwarding can also be done manually through your router’s settings. Every router’s interface is different but here are some general steps:
                                
      1. Log in to your router's web-based interface by entering its IP address into a web browser.
      2. Look for a menu labeled "Port Forwarding" or "Virtual Servers." This is typically found under a section called "Advanced" or "Firewall."
      3. Create a new rule using the IP in the error message as the local IP address and set the port number to 443 and 1080.
      4. Save the new rule. You may have to reboot your router for the changes to take effect.
      
      For more information on how to perform port forwarding, search online for your router’s model or contact your ISP.`
    },
    {
      title: `My proxy is running but I can’t connect to it on WhatsApp`, 
      body: `This can happen for a number of reasons. Here are some common issues which could cause this to happen:
                                
      • Your phone is on the same network as your proxy.
      • Port forwarding has not been configured correctly. For more information on port forwarding see the troubleshooting step: I received the error “Unable to automatically map ports.”
      • Your proxy is not running. Open the Docker app and check that the whatsapp-proxy container is running.

      You can also check for any errors that occurred while running the script by viewing the full log located in the logs directory of the downloaded folder.`
    }
  ],
  'Linux': [],
  'Windows': []
};
