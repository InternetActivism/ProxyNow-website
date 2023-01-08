import Head from 'next/head'
import Header from "../components/Header";
import Footer from '../components/Footer';
import ButtonFilter from '../components/ButtonFilter';

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
          <div className="filter pl-[5%] flex flex-col">
            <h1 className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">Filter</h1>
            <ButtonFilter text="All Proxies" fill="bg-[#F0F0F0]"/>
            <ButtonFilter text="WhatsApp" fill="bg-[#F0F0F0]" textColor="[#25D366]"/>
            <ButtonFilter text="Telegram" fill="bg-[#F0F0F0]" textColor="[#229ED9]"/>
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
