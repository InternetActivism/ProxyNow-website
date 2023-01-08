const Footer = () => {
    return(
        <>
        <div className="flex flow-root footer relative p-3 bg-[#0085FF] text-white">
            <div className="flex flex-row float-left justify-center items-center underline gap-6 text-xs sm:text-sm md:text-md lg:text-lg">
                <a href="">Contact Us</a>
                <a href="">About</a>
                <a href="">Twitter</a>
            </div>
            <div className="float-right inset-y-0 right-0 items-end">
                <p className="text-xs sm:text-sm md:text-md lg:text-lg text-white">Built by InternetActivism, a 501(c)(3) organization.</p>
            </div>
        </div>
        </>
    );
};

export default Footer;