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
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className="main-content">
          <div className="pt-40 pl-40 text-[82px] font-semibold flex w-2/3 justify-center">
            <h1>Help millions access the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54A8EA] to-[#167CCB]">internet</span>.</h1>
          </div>
        </div>
      </main>
    </>
  );
}
