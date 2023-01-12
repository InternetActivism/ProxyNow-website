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

