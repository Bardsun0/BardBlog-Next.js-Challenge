import Header from "./lib/components/layout/Header";
import MainContent from "./lib/components/features/MainContent";
import Footer from "./lib/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
