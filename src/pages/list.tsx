import Head from 'next/head'
import Header from "../components/Header";
import Footer from '../components/Footer';
import SetupProxyButtonBlue from '../components/ButtonBlue';
import ShareFriendsButtonBlue from '../components/ShareFriendsButtonBlue';
import StartProxyButtonBlue from '../components/StartProxyButtonBlue';
import ViewProxiesButtonBlue from '../components/ViewProxiesButtonBlue';
import ViewProxiesButtonWhite from '../components/ButtonWhite';

export default function List() {
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
        <div className="proxies pt-32">
          <div className="filter pl-[5%]">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Filter</h1>
            <button>All Proxies</button>
            <button>WhatsApp</button>
            <button>Telegram</button>
          </div>
          <div className="proxy-list">

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
