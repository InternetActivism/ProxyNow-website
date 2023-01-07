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
          <div className="pt-40 text-[82px] font-semibold flex w-full justify-center">
            <h1>Help millions access the internet</h1>
          </div>
        </div>
      </main>
    </>
  );
}
