import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonBlue from "../components/ButtonBlue";
import ButtonWhite from "../components/ButtonWhite";
import Faq from "../components/Faq";
import Link from "next/link";
import ShareButton from "../components/ShareButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>ProxyNow</title>
        <meta
          name="description"
          content="Easily deploy internet proxies to help Iranians bypass internet censorship."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <main>
        <div className="main-content w-full">
          <div className="main-text w-full">
            <div className="pt-48 pl-[10%] pr-[10%] leading-[1.2] sm:pr-[5%] text-[2.25rem] sm:text-[2.5rem] md:text-[3 rem] lg:text-[4rem] xl:text-[5.25rem] font-semibold flex w-full lg:w-4/5">
              <h1>
                Help Iranians access{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54A8EA] to-[#167CCB]">
                  the internet.
                </span>
              </h1>
            </div>
            <p className="pt-5 pl-[10%] text-gray-700 pr-[5%] sm:text-lg md:text-xl lg:text-2xl w-full lg:w-3/4">
              Set-up proxies to help Iranians bypass internet censorship.
            </p>
          </div>
          <div className="pl-[10%] pr-[5%] inline-flex">
            <Link href="/setup">
              <div className="mt-10">
                <ButtonBlue
                  text={"Set-up Your Own Proxy"}
                  svgD="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z"
                />
              </div>
            </Link>
            <Link href="/list">
              <div className="mt-10 ml-5">
                <ButtonWhite text={"Use a Proxy"} />
              </div>
            </Link>
          </div>
          <div className="flex justify-center proxy-carousel mt-16 sm:mt-32">
            {/*
            READ WITH CAROUSEL
            <p className="font-light text-[#575757] sm:text-md md:text-lg lg:text-xl">
              Tap on a proxy to copy the address
            </p> */}
          </div>
        </div>
        <div className="about-iran bg-[#0085FF] mt-16 py-16 ">
          <div className="px-4 sm:px-12 md:px-28 lg:px-36 mx-auto max-w-screen-xl w-full">
            <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-100">
              Millions of Iranians are unable to freely communicate across platforms like WhatsApp and Telegram due to government censorship. However, by connecting to a proxy, Iranians can bypass these restrictions.
            </p>
          </div>
        </div>
        <div className="about-proxies w-full px-4  pb-20 sm:px-12 md:px-28 lg:px-36 mx-auto max-w-screen-xl">
        <div className="">
            <div className="find-proxies pt-12  w-full">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black pb-4 w-full">
                Help by starting your own proxy.
              </h1>
              <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-700">
                ProxyNow has created simple steps to start your own proxy
                without any technical knowledge.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/setup">
                <ButtonBlue small={true} text={"Start a Proxy"} />
              </Link>
            </div>
          </div>

        <div className="">
            <div className="find-proxies pt-12  w-full">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black pb-4 w-full">
                What is a proxy?
              </h1>
              <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-700">
                A proxy server is like a middleman between your computer and the internet, helping protect your identity and keep your online activity private.
              </p>
            </div>

            <div className="pt-4">
              <Link href="https://www.techtarget.com/whatis/definition/proxy-server">
                <ButtonBlue small={true} text={"Learn more"} />
              </Link>
            </div>
          </div>

          <div className="">
            <div className="find-proxies pt-12  w-full">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black pb-4 w-full">
                Are proxies safe?
              </h1>
              <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-700">
              Millions of people across the world use proxies to safely bypass censorship filters, improve online security, and access websites that aren't available in their country.
              </p>
            </div>

            <div className="pt-4">
              <Link href="https://www.upguard.com/blog/proxy-server">
                <ButtonBlue small={true} text={"Learn more"} />
              </Link>
            </div>
          </div>

         

        
        </div>
        <Faq />
      </main>
      <Footer />
    </>
  );
}
