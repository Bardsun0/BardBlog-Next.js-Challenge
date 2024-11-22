import Head from "next/head";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bard Blog</title>
        <meta
          name="description"
          content="Bard Blog - Next.js ve Tailwind ile geliştirildi."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-gray-800">Hoş Geldiniz!</h1>
        <p className="mt-4 text-gray-600">
          Bu bir Next.js ve Tailwind CSS uygulamasıdır.
        </p>
      </main>
    </>
  );
}
