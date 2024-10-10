import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
export default function Index() {
  return (
    <>
    <Head>
      <title>Bob's Burguer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section className="main">
      <Header />
      <Counter />
      <Footer name="Daniel Mandira" />
    </section>
    </>
  );
}
