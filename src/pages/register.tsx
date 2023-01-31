import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/RegisterForm";

export default function Register() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>Share Proxy - ProxyNow</title>
        <meta name="description" content="Share a proxy with ProxyNow." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <main>
        <div className="flex items-center justify-center mt-12">
          <Form />
        </div>
      </main>
      <Footer />
    </div>
  );
}
