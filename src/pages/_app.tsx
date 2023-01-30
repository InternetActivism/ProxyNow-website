import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

if (
  typeof window !== "undefined" &&
  process.env.NODE_ENV === "development"
  // && /VIVID_ENABLED=true/.test(document.cookie)
) {
  import("vivid-studio").then((v) => v.run());
  import("vivid-studio/style.css");
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ProxyNow</title>
        <meta name="description" content="Help Iranians access the internet." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ProxyNow.org" />

        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />

        <meta property="og:title" content="ProxyNow" />
        <meta property="og:image" content="https://proxynow.org/embed-image.jpg" />
        <meta property="og:description" content="Help millions access the internet." />
        
        <meta name="twitter:site" content="@internetactvsm"/>
        <meta name="twitter:creator" content="@internetactvsm"/>
        <meta name="twitter:title" content="ProxyNow"/>
        <meta name="twitter:description" content="Help millions access the internet."/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image" content="https://proxynow.org/embed-image.jpg"/>

        <meta name="theme-color" content="#0085FF"/>
        <meta name="msapplication-navbutton-color" content="#0085FF"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="#0085FF"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
