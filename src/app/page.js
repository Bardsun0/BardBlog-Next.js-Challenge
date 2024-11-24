import Head from "next/head";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bard Blog</title>
        <meta
          name="description"
          content="Bard Blog - Next.js ile geliştirildi."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}
