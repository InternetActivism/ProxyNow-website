import Head from 'next/head'
import Header from "../components/Header";
import Footer from '../components/Footer';
import ButtonBlue from '../components/ButtonBlue';
 
export default function Setup() {
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
               <center>
                   <div className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2">
                       Setup Your Own Proxy
                   </div>
                   <div className="text-black text-xl sm:text-2xl md:text-md lg:text-lg pl-2 sm:pl-2 md:pl-5 lg:pl-10 text-opacity-90 hover:text-opacity-100 transition-all">
                       Run a proxy and support internet freedom with the click of a button
                   </div>
                  
                   <div className="flex justify-center space-x-4 font-mono text-white text-sm font-bold leading-6 bg-stripes-fuchsia rounded-lg">
                       <div className="justify-self-auto p-4 rounded-lg bg-blue-500 shadow-lg">MacOS</div>
                       <div className="justify-self-auto p-4 rounded-lg bg-blue-500 shadow-lg">Linux</div>
                       <div className="justify-self-auto p-4 rounded-lg bg-blue-500 shadow-lg">Windows</div>
                   </div>
                   <br></br>
                   <div className="inline-block p-4 shadow-sm bg-blue-500 w-16 h-16 rounded-full">
                       <p className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2 text-center"> 1 </p>
                   </div>
 
                   <div className="inline-block font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2 ml-2">
                   Download Our Proxy Setup Tool
                   </div>
 
                   <div>
                       For a quick and easy Proxy setup simply download and run our script
                   </div>
 
                   <div className="inline-block p-4 shadow-sm bg-blue-500 w-16 h-16 rounded-full">
                       <p className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2 text-center"> 2 </p>
                   </div>
                   <div className="inline-block font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2 ml-2"> Run The Proxy </div>
                   <div>
                       Open the downloaded folder and navigate to scripts folder then open the MacOS-whatsapp.sh file. This will start the proxy in Terminal.
                   </div>
 
                   <div className="inline-block p-4 shadow-sm bg-blue-500 w-16 h-16 rounded-full">
                       <p className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2 text-center justify-space-between"> 3 </p>
                   </div>
 
                   <div className="inline-block font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2 ml-2" >
                       Share Your Proxy Address
                   </div>
                   <div>
                       That’s it, you now have a working proxy! Share the address displayed at the bottom of the Terminal to allow others to connect to your proxy.
 
                       Please consider registering your proxy on our list to help people find it.
                   </div>
                   <ButtonBlue text={"Register Your Proxy"} />
               </center>
           </div>
           <center>
           <div className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl pb-2">
                       Having Trouble?
                   </div>
 
           </center>
           <Footer />
       </>
   );
}
 

