import Head from 'next/head'
import styles from 'src/styles/Home.module.css'

import Header from "../components/Header";
import Footer from '../components/Footer';
import ShareFriendsButtonBlue from '../components/ShareFriendsButtonBlue';
import ViewProxiesButtonWhite from '../components/ViewProxiesButtonWhite';
import ViewProxiesButtonBlue from '../components/ViewProxiesButtonBlue';
import StartProxyButtonBlue from '../components/StartProxyButtonBlue';

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
      <main className={styles.main}>  
        <div className="main-content">
          <div className="main-text">
            <div className="pt-40 pl-40 text-[82px] font-semibold flex w-2/3 justify-center">
              <h1>Help millions access the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54A8EA] to-[#167CCB]">internet.</span></h1>
            </div>
            <p className="pt-5 pl-40 text-[24px] w-2/3">Easily find and deploy internet proxies to help people bypass internet censorship all over the world.</p>
          </div>
          <ShareFriendsButtonBlue />
          <ViewProxiesButtonWhite />
          <div className="flex justify-center proxy-carousel mt-40">
            <p className="font-light text-[#575757]">Tap on a proxy to copy the address</p>
          </div>
        </div>
        <div className="about-iran bg-[#0085FF] mt-16 py-16 px-48">
          <p className='text-[24px] text-white'>Millions of people in Iran are unable to access the internet freely due to the oppressive actions of the government, which restrict access to platforms like WhatsApp and Telegram. This censorship is a blatant attempt to limit free speech and undermine the fundamental right to communicate freely online.</p>
        </div>
        <div className="about-proxies">
          <div className="find-proxies pt-24 px-64">
            <h1 className="font-semibold text-[#0984E3] text-[42px] pb-4 ">Find Proxies</h1>
            <p className="text-[24px] text-black">Popular chat applications like WhatsApp and Telegram have launched easy-to-use proxies that are able to bypass attempts of censorship. ProxyNow has a centralized resource for finding live proxies to use.</p>
          </div>
          <ViewProxiesButtonBlue />
          <div className="how-to-help pb-40">
            <h1 className="font-semibold text-[#0984E3] text-[42px] pb-6 pt-32 px-64">How To Help</h1>
            <h2 className="font-semibold text-[32px] pb-2 px-64">Start your own proxy in a couple clicks</h2>
            <p className="text-[24px] text-black px-64">ProxyNow has created simple steps to start your own proxy without any technical experience. If you have access to a computer, we strongly suggest you consider starting a proxy.</p>
            <StartProxyButtonBlue />
            <h2 className="font-semibold text-[32px] pb-2 pt-12 px-64">Share with Friends</h2>
            <p className="text-[24px] text-black px-64">The more people know about ProxyNow, the more people will be helped. Please consider sharing this link with your friends</p>
            <div className="pl-24">
              <ShareFriendsButtonBlue />
            </div>
          </div>
        </div>
        
      </main>
      <Footer />
    </>
  );
}
