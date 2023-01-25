import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonBlue from "../components/ButtonBlue";
import MacSetup from "../components/MacSetup";
import { useState } from "react";
import AWSSetup from "../components/AWSSetup";
import LinuxSetup from "../components/LinuxSetup";

export default function Setup() {
  const [selected, setSelected] = useState("Mac");

  const osList = ["Mac", "Linux", "AWS"];

  return (
    <>
      <Head>
        <title>ProxyNow: Prevent Censorship</title>
        <meta name="description" content="Prevent International Censorship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <div className="min-h-screen flex flex-col justify-between">
        <div className="main-content w-full pt-12">
          <div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2 mt-16 text-center">
                Set Up Your Own Proxy
              </h1>
              <p className="text-black text-sm sm:text-md lg:text-lg pl-2 sm:pl-2 md:pl-5 lg:pl-10 text-opacity-90 hover:text-opacity-100 transition-all text-center">
                Run a proxy and support internet freedom with the click of a
                button
              </p>
              <div
                className="inline-flex
                                h-[50px]
                                sm:h-[75px]
                                mt-5
                                bg-grey-medium
                                rounded-2xl
                                overflow-hidden"
              >
                {osList.map((os) => {
                  return (
                    <label
                      key={os}
                      htmlFor={`${os}-radio`}
                      className={`flex items-center justify-center w-[77px] sm:w-[115px] px-4 py-1 rounded-2xl cursor-pointer hover:text-white mr-1 last:mr-0 ${
                        selected === os
                          ? "bg-primary text-white"
                          : "hover:bg-primary hover:bg-opacity-60"
                      }`}
                      onClick={() => {
                        setSelected(os);
                      }}
                    >
                      <input
                        type="radio"
                        className="hidden"
                        id={`${os}-radio`}
                        value=""
                        name="os-radio"
                      />
                      <label
                        className="text-sm sm:text-xl font-medium text-center"
                        htmlFor={`${os}-radio`}
                      >
                        {os}
                      </label>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
          {selected === "Mac" && <MacSetup />}
          {selected === "Linux" && <LinuxSetup />}
          {selected === "AWS" && <AWSSetup />}
        </div>
        <Footer />
      </div>
    </>
  );
}
