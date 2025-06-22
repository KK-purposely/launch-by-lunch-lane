
import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Launch by Lunch - AI-First Founder Community</title>
        <meta name="description" content="Join Launch by Lunch, the community for AI-first founders. Build, launch, and scale your startup without extensive coding knowledge." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://launchbylunch.com/" />
        <meta property="og:title" content="Launch by Lunch - AI-First Founder Community" />
        <meta property="og:description" content="Join Launch by Lunch, the community for AI-first founders. Build, launch, and scale your startup without extensive coding knowledge." />
        <meta property="og:image" content="https://cdn.lovable.app/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://launchbylunch.com/" />
        <meta property="twitter:title" content="Launch by Lunch - AI-First Founder Community" />
        <meta property="twitter:description" content="Join Launch by Lunch, the community for AI-first founders. Build, launch, and scale your startup without extensive coding knowledge." />
        <meta property="twitter:image" content="https://cdn.lovable.app/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png" />

        {/* LinkedIn */}
        <meta property="linkedin:owner" content="" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-launch-light via-white to-orange-50">
        <Hero />
        <Testimonials />
        <Features />
        <Footer />
      </div>
    </>
  );
};

export default Index;
