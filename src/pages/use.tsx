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
        <title>Use a Proxy - ProxyNow</title>
        <meta name="description" content="Finding and how to use a proxy." />
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
            </div>
            <div className="how-to px-8 sm:px-16 md:px-32 lg:px-40 mx-auto max-w-screen-xl w-full mt-12">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black pb-4 w-full">
                How to use a Proxy
              </h1>
              <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-700 whitespace-pre-line">
                <b>How to connect to a proxy on WhatsApp on Android:</b><br/>
                1. Ensure you have the latest version of WhatsApp <br/>
                2. Go to Chats &gt; More options &gt; Settings <br/>
                3. Tap Storage and Data &gt; Proxy <br/>
                4. Select Use Proxy and enter the proxy address <br/>
                5. Save the settings and check for a successful connection indicated by a green tick <br/>
                6. If unsuccessful, try a different proxy address as the previous one may be blocked <br/>
                <br/>
                <b>How to connect to a proxy on WhatsApp on iPhone:</b><br/>
                1. Ensure you have the latest version of WhatsApp <br/>
                2. Go to WhatsApp Settings &gt; Storage and Data &gt; Proxy <br/>
                3. Select Use Proxy and enter the proxy address <br/>
                4. Save the settings and check for a successful connection indicated by a green tick <br/>
                5. If unsuccessful, try a different proxy address as the previous one may be blocked <br/>
                <br/>
                Note: Using a third-party proxy will share your IP address with the proxy provider. WhatsApp does not provide third-party proxies.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default List;
