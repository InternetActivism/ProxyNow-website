import Head from "next/head";
import Header from "../components/Header";
import Footer from '../components/Footer';
import ButtonBlue from '../components/ButtonBlue';
import MacSetup from '../components/MacSetup';
import { useState } from 'react';
import WindowsSetup from '../components/WindowsSetup';



export default function Setup() {
    const [selected, setSelected] = useState();
    
   return (
       <>
           <Head>
               <title>ProxyNow: Prevent Censorship</title>
               <meta name="description" content="Prevent International Censorship" />
               <meta name="viewport" content="width=device-width, initial-scale=1" />
               <link rel="icon" href="/logo.svg" />
           </Head>
           <Header />
 
           <div className="main-content w-full pt-12">
               <div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2 mt-16 text-center">
                           Setup Your Own Proxy
                        </h1>
                        <p className="text-black text-xl sm:text-2xl md:text-md lg:text-lg pl-2 sm:pl-2 md:pl-5 lg:pl-10 text-opacity-90 hover:text-opacity-100 transition-all text-center">Run a proxy and support internet freedom with the click of a button</p>

                        <div className="flex text-white bg-[#E7E7E7] w-min text-sm font-bold leading-6 rounded-2xl my-4">
                           <button id="osToggle" onClick={() => { setSelected('mac') }} className="justify-self-auto px-6 py-4 rounded-2xl bg-[#E7E7E7] text-black focus:bg-blue-500 focus:text-white">MacOS</button>
                           <button id="osToggle" onClick={() => { setSelected('linux') }} className="justify-self-auto px-6 py-4 rounded-2xl bg-[#E7E7E7] text-black focus:bg-blue-500 focus:text-white">Linux</button>
                           <button id="osToggle" onClick={() => { setSelected('windows') }} className="justify-self-auto px-6 py-4 rounded-2xl bg-[#E7E7E7] text-black focus:bg-blue-500 focus:text-white">Windows</button>
                        </div>
                    </div>
                    
                </div>
                {
                    (selected == 'mac') ? <MacSetup /> : null
                }
                {
                    (selected == 'linux') ? null : null
                }
                {
                    (selected == 'windows') ?  <WindowsSetup /> : null
                }
                
            </div>
            <h1 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl pl-2 sm:pl-2 md:pl-5 lg:pl-40 pt-20 pb-2">
                Having Trouble?
            </h1>
 
           <Footer />
       </>
   );
}