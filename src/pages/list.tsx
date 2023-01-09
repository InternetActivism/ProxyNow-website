import Head from 'next/head'
import Header from "../components/Header";
import Footer from '../components/Footer';
import ButtonFilter from '../components/ButtonFilter';
import React, { useCallback, useEffect, useRef } from 'react'

const List = () => {
    
  return(
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
        <div className="flex flex-row gap-10 sm:gap-10 md:gap-15 lg:gap-20 pt-32">
          <div className="filter pl-[5%] flex flex-col">
            <h1 className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">Filter</h1>
            <div className="flex flex-col gap-3">
              <ButtonFilter focusState="true" text="All Proxies" fill="bg-[#F0F0F0]" hoverColor="hover:bg-[#0085FF]" hoverTextColor="hover:text-white" selectedColor="focus:bg-[#0085FF]" selectedTextColor="focus:text-white"/>
              <ButtonFilter text="WhatsApp" svg="/whatsapp.svg" fill="bg-[#F0F0F0]" textColor="text-[#25D366]" hoverColor="hover:bg-green-500" hoverTextColor="hover:text-white" selectedColor="focus:bg-green-500" selectedTextColor="focus:text-white"/>
              <ButtonFilter text="Telegram" svg="/telegram.svg" fill="bg-[#F0F0F0]" textColor="text-[#229ED9]" hoverColor="hover:bg-[#229ED9]" hoverTextColor="hover:text-white" selectedColor="focus:bg-[#229ED9]" selectedTextColor="focus:text-white"/>
            </div>
          </div>
          <div className="proxy-list">
            <h1 className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">Proxies Available</h1>
            <div className="proxy-columns flex flex-row justify-between w-full text-[#C1C1C1] text-[0.4rem] sm:text-sm md:text-md lg:text-lg">
              <p className='pl-1 sm:pl-2'>IP Address</p>
              <p className='pl-4 sm:pl-12 md:pl-14 lg:pl-20'>Location</p>
              <p className='pl-6 sm:pl-18 md:pl-20 lg:pl-44'>Platforms</p>
              <p className='pl-4 sm:pl-12 md:pl-14 lg:pl-20'>Latency</p>
              <p className='pl-3 sm:pl-10 md:pl-12 lg:pl-16'>Last Checked</p>
            </div>
          </div>
        </div>
        <div className="how-to">

        </div>
      </div>
        
      </main>
      <div className="pt-96">
        <Footer />
      </div>
    </>
  );
}

export default List;

