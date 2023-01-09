import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonBlue from "../components/ButtonBlue";
import ButtonWhite from "../components/ButtonWhite";

export default function Home() {
  return (
    <>
      <Head>
        <title>ProxyNow</title>
        <meta
          name="description"
          content="Easily find and deploy internet proxies to help people bypass internet censorship all over the world."
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
                Help millions access the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54A8EA] to-[#167CCB]">
                  internet.
                </span>
              </h1>
            </div>
            <p className="pt-5 pl-[10%] text-gray-700 pr-[5%] sm:text-lg md:text-xl lg:text-2xl w-full lg:w-3/4">
              Easily find and deploy internet proxies to help people bypass
              internet censorship all over the world.
            </p>
          </div>
          <div className="pl-[10%] pr-[5%] inline-flex">
            <div className="mt-10">
              <ButtonBlue text={"Setup Your Own Proxy"} svgD="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z"/>
            </div>
            <div className="mt-10 ml-5">
              <ButtonWhite text={"View All Proxies"} />
            </div>
          </div>
          <div className="flex justify-center proxy-carousel mt-40">
            {/*
            READD WITH CAROUSEL
            <p className="font-light text-[#575757] sm:text-md md:text-lg lg:text-xl">
              Tap on a proxy to copy the address
            </p> */}
          </div>
        </div>
        <div className="about-iran bg-[#0085FF] mt-16 py-16 px-12 sm:px-32 md:px-48 lg:px-56 w-full">
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-100">
            Millions of people in Iran are unable to access the internet freely
            due to the oppressive actions of the government, which restrict
            access to platforms like WhatsApp and Telegram. This censorship is a
            blatant attempt to limit free speech and undermine the fundamental
            right to communicate freely online.
          </p>
        </div>
        <div className="about-proxies w-full px-12 sm:px-32 md:px-48 lg:px-56">
          <div className="find-proxies pt-24  w-full">
            <h1 className="font-semibold text-[#0984E3] text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-4 w-full">
              Find Proxies
            </h1>
            <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-700">
              Popular chat applications like WhatsApp and Telegram have launched
              easy-to-use proxies that are able to bypass attempts of
              censorship. ProxyNow has a centralized resource for finding live
              proxies to use.
            </p>
          </div>
          <div className="pt-4">
            <ButtonBlue text={"View All Proxies"} svgD="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z"/>
          </div>
          <div className="how-to-help pb-32 w-full pt-20">
            <div className="">
              <h1 className="font-semibold text-[#0984E3] text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-6">
                How To Help
              </h1>
              <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl pb-2">
                Start your own proxy in a couple clicks
              </h2>
              <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-700">
                ProxyNow has created simple steps to start your own proxy
                without any technical experience. If you have access to a
                computer, we strongly suggest you consider starting a proxy.
              </p>
            </div>
            <div className="pt-4 ">
              <ButtonBlue text={"Start Proxy"} svgD="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z" />
            </div>
            <div className="">
              <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl pb-2 pt-8">
                Share with Friends
              </h2>
              <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-700">
                The more people know about ProxyNow, the more people will be
                helped. Please consider sharing this link with your friends
              </p>
            </div>
            <div className="pt-4">
              <ButtonBlue text={"Share With Friends"} svgD="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
