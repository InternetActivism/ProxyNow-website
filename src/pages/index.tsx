import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
          <title>ProxyNow: Prevent Censorship</title>
          <meta name="description" content="Prevent International Censorship" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.svg" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className="main-content">
          <div className="main-text">
            <div className="pt-40 pl-40 text-[82px] font-semibold flex w-2/3 justify-center">
              <h1>Help millions access the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54A8EA] to-[#167CCB]">internet.</span></h1>
            </div>
            <p className="pt-5 pl-40 text-[24px] w-2/3">Easily find and deploy internet proxies to help people bypass internet censorship all over the world.</p>
          </div>
          <button className="mt-10 ml-36 inline-flex bg-[#0085FF] hover:bg-blue-700 text-white text-[24px] font-semibold py-2 px-4 rounded-full">
            Share With Friends
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z" fill="white"/></svg>
          </button>
          <button className="group proxy-button mt-10 ml-5 inline-flex bg-[white] hover:bg-[#0085FF] hover:text-white text-[#0085FF] text-[24px] border border-[#0085FF] font-semibold py-2 px-4 rounded-full">
            View All Proxies
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z" fill="#0085FF"/></svg>
          </button>
        </div>
      </main>
    </>
  );
}
