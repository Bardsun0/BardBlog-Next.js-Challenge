import Head from "next/head";
import Header from "./lib/components/Header";
import MainContent from "./lib/components/MainContent";
import Footer from "./lib/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
