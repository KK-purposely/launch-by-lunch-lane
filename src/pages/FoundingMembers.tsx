
import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/join/HeroSection";
import MainServicesSection from "@/components/join/MainServicesSection";
import FAQSection from "@/components/join/FAQSection";
import BottomCTASection from "@/components/join/BottomCTASection";
import ContactForm from "@/components/ContactForm";
import YouTubePlayer from "@/components/YouTubePlayer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FoundingMembers = () => {
  const navigate = useNavigate();
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleServiceClick = (service: any) => {
    if (service.isContact) {
      setSelectedService(service.title);
      setContactFormOpen(true);
    } else if (service.ctaUrl === "https://calendly.com/karen-launchbylunch/ai-low-code-office-hours") {
      window.open(service.ctaUrl, "_blank");
    } else if (service.ctaUrl === "#") {
      console.log(`Clicked ${service.title}`);
    } else if (service.ctaUrl.startsWith("/")) {
      navigate(service.ctaUrl);
    } else {
      window.location.href = service.ctaUrl;
    }
  };

  return (
    <>
      <Helmet>
        <title>Founding Members - Launch by Lunch</title>
        <meta name="description" content="Join Launch by Lunch as a founding member - the community for AI-first founders. Build, launch, and scale your startup without extensive coding knowledge." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://launchbylunch.com/founding-members" />
        <meta property="og:title" content="Founding Members - Launch by Lunch" />
        <meta property="og:description" content="Join Launch by Lunch as a founding member - the community for AI-first founders. Build, launch, and scale your startup without extensive coding knowledge." />
        <meta property="og:image" content="https://cdn.lovable.app/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://launchbylunch.com/founding-members" />
        <meta property="twitter:title" content="Founding Members - Launch by Lunch" />
        <meta property="twitter:description" content="Join Launch by Lunch as a founding member - the community for AI-first founders. Build, launch, and scale your startup without extensive coding knowledge." />
        <meta property="twitter:image" content="https://cdn.lovable.app/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png" />

        {/* LinkedIn */}
        <meta property="linkedin:owner" content="" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-launch-light via-white to-orange-50">
        <Hero />
        
        {/* YouTube Video Section */}
        <section className="w-full py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="w-full mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <YouTubePlayer
                  videoId="bOsbDXRda1g"
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg overflow-hidden"
                />
              </div>
            </div>
          </div>
        </section>
        
        <Features />
        <Testimonials />
        
        {/* Join page content */}
        <HeroSection />
        <MainServicesSection onServiceClick={handleServiceClick} />
        <FAQSection />
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <BottomCTASection />
          <ContactForm
            isOpen={contactFormOpen}
            onClose={() => setContactFormOpen(false)}
            serviceTitle={selectedService}
          />
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default FoundingMembers;
