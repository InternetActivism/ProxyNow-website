import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonFilter from "../components/ButtonFilter";
import React, { useCallback, useEffect, useRef, useState } from "react";

export type FilterName = "All Proxies" | "WhatsApp" | "Telegram";

const List = () => {
  const [filter, setFilter] = useState<FilterName>("All Proxies");

  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>ProxyNow: Prevent Censorship</title>
        <meta name="description" content="Prevent International Censorship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <main>
        <div className={`min-h-screen flex flex-col justify-between`}>
          <div className="main-content w-full">
            <div className="flex flex-row gap-10 sm:gap-10 md:gap-15 lg:gap-20 pt-32">
              <div className="px-8 sm:px-16 md:px-32 lg:px-40 mx-auto max-w-screen-xl w-full">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black pb-4 w-full">
                  Finding a Proxy
                </h1>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-700">
                  Due to the serious nature of this initiative, we recognize
                  that it would be irresponsible to simply have a list of
                  proxies on the open web. Instead, we will be working with our
                  partner organizations to securely distribute the list of
                  proxies to those who need it most.
                </p>{" "}
                <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-700 mt-6">
                  If you are in dire need of a proxy right now, please{" "}
                  <a
                    href="https://twitter.com/internetactvsm"
                    className="text-[#0085FF] hover:text-[#167CCB] font-medium"
                  >
                    contact us on Twitter.
                  </a>
                </p>
              </div>
              {/* <div className="filter pl-[5%] flex flex-col">
                <h1 className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
                  Filter
                </h1>
                <div className="flex flex-col gap-3">
                  <ButtonFilter filter={filter} setFilter={setFilter} />
                </div>
              </div>
              <div className="proxy-list">
                <h1 className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
                  Proxies Available
                </h1>
                <div className="proxy-columns flex flex-row justify-between w-full text-[#C1C1C1] text-[0.4rem] sm:text-sm md:text-md lg:text-lg">
                  <p className="pl-1 sm:pl-2">IP Address</p>
                  <p className="pl-4 sm:pl-12 md:pl-14 lg:pl-20">Location</p>
                  <p className="pl-6 sm:pl-18 md:pl-20 lg:pl-44">Platforms</p>
                  <p className="pl-4 sm:pl-12 md:pl-14 lg:pl-20">Latency</p>
                  <p className="pl-3 sm:pl-10 md:pl-12 lg:pl-16">Last Checked</p>
                </div>
              </div> */}
            </div>
            <div className="how-to px-8 sm:px-16 md:px-32 lg:px-40 mx-auto max-w-screen-xl w-full mt-12">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black pb-4 w-full">
                How to use a Proxy
              </h1>
              <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-700">
                TODO
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default List;
