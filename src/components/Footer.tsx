const Footer = () => {
  return (
    <>
      <div className="flex flow-root justify-between footer relative p-3 bg-[#0085FF] text-white">
        <div className="flex flex-row float-left justify-center items-center underline gap-2 sm:gap-6 text-[8px] sm:text-sm md:text-md lg:text-lg">
        <a
            href="https://www.internetactivism.org/contact"
            className="hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
          <a
            href="https://www.internetactivism.org/about"
            className="hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
          <a
            href="https://twitter.com/internetactvsm"
            className="hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
        <div className="float-right inset-y-0 right-0 items-end">
          <p className="text-[8px] sm:text-sm md:text-md lg:text-lg text-white">
            Built by InternetActivism, a 501(c)(3) organization.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
