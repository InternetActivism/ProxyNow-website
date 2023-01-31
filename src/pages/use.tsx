import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import ButtonBlue from "../components/ButtonBlue";
import WhatsappLogo from "../components/logos/WhatsappLogo";
import TelegramLogo from "../components/logos/TelegramLogo";
import { useRouter } from "next/router";
import Link from "next/link";

const UseProxies = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>Use a Proxy - ProxyNow</title>
        <meta name="description" content="Help Iranians access the internet." />
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
                  If you are in dire need of a proxy right now, please email us
                  at{" "}
                  <a
                    href="mailto:contact@internetactivism.org"
                    className="text-[#0085FF] hover:text-[#167CCB] font-medium"
                  >
                    contact@internetactivism.org
                  </a>{" "}
                  with the subject line: &quot;I need a proxy now.&quot;
                </p>
              </div>
            </div>
            <div className="how-to px-8 sm:px-16 md:px-32 lg:px-40 mx-auto max-w-screen-xl w-full my-12">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black pb-4 w-full">
                How to use a Proxy
              </h1>
              <div>
                <div className="flex flex-row flex-wrap justify-center">
                  <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2 ">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                      <div className="px-6 py-4">
                        <div className="flex flex-row justify-between">
                          <div className="font-bold text-xl mb-2">WhatsApp</div>
                          <WhatsappLogo className="h-6 md:h-8 w-6 md:w-8" />
                        </div>
                        <div className="text-gray-700 text-base">
                          Choosing a proxy enables you to connect to WhatsApp
                          through servers set up by volunteers around the world
                          dedicated to helping people communicate freely. If you
                          have the ability to help others connect, you can learn
                          how to set up a proxy{" "}
                          <Link
                            className="text-primary cursor-pointer"
                            href="/setup"
                          >
                            here.
                          </Link>
                        </div>
                      </div>
                      <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                          HTTP
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                          HTTPS
                        </span>
                      </div>
                      <div className="px-6 py-4">
                        <ButtonBlue
                          small={true}
                          text="View Tutorial"
                          onClick={() => {
                            router.push(
                              "https://faq.whatsapp.com/520504143274092/?cms_platform=iphone&helpref=platform_switcher"
                            );
                          }}
                        ></ButtonBlue>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2 ">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                      <div className="px-6 py-4">
                        <div className="flex flex-row justify-between">
                          <div className="font-bold text-xl mb-2">Telegram</div>
                          <TelegramLogo className="h-4 md:h-6 w-4 md:w-6 m-2" />
                        </div>
                        <div className="text-gray-700 text-base">
                          Proxy servers help you remain safe on Telegram as it
                          is your chats are encrypted and your IP is hidden.
                          Moreover, these proxy servers can also be used to
                          unblock Telegram if it’s unavailable in your country.
                        </div>
                      </div>
                      <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                          SOCKS5
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                          MTProto
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                          HTTP
                        </span>
                      </div>
                      <div className="px-6 py-4">
                        <ButtonBlue
                          small={true}
                          text="View Tutorial"
                          onClick={() => {
                            router.push(
                              "https://geonode.com/blog/how-to-use-proxies-with-telegram/#How%20To%20Create%20Proxy%20For%20Telegram"
                            );
                          }}
                        ></ButtonBlue>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UseProxies;
