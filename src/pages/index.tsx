import Head from 'next/head'
import Header from "../components/Header";
import Footer from '../components/Footer';
import ButtonBlue from '../components/ButtonBlue';
import ButtonWhite from '../components/ButtonWhite';

export default function Home() {
  return (
    <>
      <Head>
          <title>ProxyNow: Prevent Censorship</title>
          <meta name="description" content="Prevent International Censorship" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <main>  
        <div className="main-content w-full">
          <div className="main-text w-full">
            <div className="pt-40 pl-[10%] pr-[10%] sm:pr-[5%] text-[2.25rem] sm:text-[2.5rem] md:text-[3 rem] lg:text-[4rem] xl:text-[5.25rem] font-semibold flex w-full lg:w-4/5">
              <h1>Help millions access the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54A8EA] to-[#167CCB]">internet.</span></h1>
            </div>
            <p className="pt-5 pl-[10%] pr-[5%] sm:text-lg md:text-xl lg:text-2xl w-full lg:w-3/4">Easily find and deploy internet proxies to help people bypass internet censorship all over the world.</p>
          </div>
          <div className="pl-[9%] pr-[5%] inline-flex">
            <div className="mt-10">
              <ButtonBlue text={"Setup Your Own Proxy"} />
            </div>
            <div className="mt-10 ml-5">
              <ButtonWhite text={"View All Proxies"} />
            </div>
          </div>
          <div className="flex justify-center proxy-carousel mt-40">
            <p className="font-light text-[#575757] sm:text-md md:text-lg lg:text-xl">Tap on a proxy to copy the address</p>
          </div>
        </div>
        <div className="about-iran bg-[#0085FF] mt-16 py-16 px-12 sm:px-24 md:px-32 lg:px-48 w-full">
          <p className='text-md sm:text-lg md:text-xl lg:text-2xl text-white'>Millions of people in Iran are unable to access the internet freely due to the oppressive actions of the government, which restrict access to platforms like WhatsApp and Telegram. This censorship is a blatant attempt to limit free speech and undermine the fundamental right to communicate freely online.</p>
        </div>
        <div className="about-proxies w-full">
          <div className="find-proxies pt-24 px-16 sm:px-32 md:px-48 lg:px-56 w-full">
            <h1 className="font-semibold text-[#0984E3] text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-4 w-full">Find Proxies</h1>
            <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-black">Popular chat applications like WhatsApp and Telegram have launched easy-to-use proxies that are able to bypass attempts of censorship. ProxyNow has a centralized resource for finding live proxies to use.</p>
          </div>
          <div className="pt-4 pl-12 sm:pl-28 md:pl-44 lg:pl-52">
          <ButtonBlue text={"View All Proxies"} />
          </div>
          <div className="how-to-help pb-40 w-full">
            <div className="px-16 sm:px-32 md:px-48 lg:px-56">
              <h1 className="font-semibold text-[#0984E3] text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-6 pt-32">How To Help</h1>
              <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2">Start your own proxy in a couple clicks</h2>
              <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-black">ProxyNow has created simple steps to start your own proxy without any technical experience. If you have access to a computer, we strongly suggest you consider starting a proxy.</p>
            </div>
            <div className="pt-4 pl-12 sm:pl-28 md:pl-44 lg:pl-52">
              <ButtonBlue text={"Start Proxy"} />
            </div>
            <div className="px-16 sm:px-32 md:px-48 lg:px-56">
              <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2 pt-12">Share with Friends</h2>
              <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-black">The more people know about ProxyNow, the more people will be helped. Please consider sharing this link with your friends</p>
            </div>
            <div className="pt-4 pl-12 sm:pl-28 md:pl-44 lg:pl-52">
            <ButtonBlue text={"Share With Friends"} />
            </div>
          </div>
        </div>
        
      </main>
      <Footer />
    </>
  );
}
