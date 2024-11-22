import Head from "next/head";
import Header from "./components/Header";

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
      <Header />
    </>
  );
}
