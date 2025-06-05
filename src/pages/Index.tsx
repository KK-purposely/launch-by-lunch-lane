
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-launch-light via-white to-orange-50">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
