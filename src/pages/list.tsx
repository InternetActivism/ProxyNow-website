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
            <div className="flex flex-col gap-3">
              <ButtonFilter text="All Proxies" fill="bg-[#F0F0F0]" hoverColor="hover:bg-[#0085FF]" hoverTextColor="hover:text-white" selectedColor="focus:bg-[#0085FF]" selectedTextColor="focus:text-white"/>
              <ButtonFilter text="WhatsApp" svg="/whatsapp.svg" fill="bg-[#F0F0F0]" textColor="text-[#25D366]" hoverColor="hover:bg-green-500" hoverTextColor="hover:text-white" selectedColor="focus:bg-green-500" selectedTextColor="focus:text-white"/>
              <ButtonFilter text="Telegram" svg="/telegram.svg" fill="bg-[#F0F0F0]" textColor="text-[#229ED9]" hoverColor="hover:bg-[#229ED9]" hoverTextColor="hover:text-white" selectedColor="focus:bg-[#229ED9]" selectedTextColor="focus:text-white"/>
            </div>
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
