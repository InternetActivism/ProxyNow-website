import Head from 'next/head'
import styles from 'src/styles/Home.module.css'


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
        <div className="pt-28 text-3xl font-semibold flex w-full justify-center">
          You can help censorship around the world
        </div>
      </main>
    </>
  );
}
