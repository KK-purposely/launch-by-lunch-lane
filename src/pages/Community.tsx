
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommunityForm from "@/components/community/CommunityForm";
import CommunityHeroSection from "@/components/community/CommunityHeroSection";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FitSection from "@/components/FitSection";
import HeroSection from "@/components/join/HeroSection";
import MainServicesSection from "@/components/join/MainServicesSection";
import FAQSection from "@/components/join/FAQSection";
import BottomCTASection from "@/components/join/BottomCTASection";
import ContactForm from "@/components/ContactForm";
import YouTubePlayer from "@/components/YouTubePlayer";

const Community = () => {
  const navigate = useNavigate();
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      window.open(service.ctaUrl, "_blank");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-launch-light via-white to-orange-50">
      <CommunityHeroSection />

      {/* YouTube Video Section */}
      <section className="w-full py-16 px-4 sm:px-6 bg-white">
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

      {/* Partner Network Section */}
      <section className="w-full py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <img 
            src="/lovable-uploads/edf596a7-bfe1-43e4-a3c2-8d89f888d8d6.png" 
            alt="Bringing access to founders through our global partner network: Founders EDGE, CIC, techstars, PastCTO, Silicon Society"
            className="w-full h-auto max-w-4xl mx-auto"
          />
        </div>
      </section>

      <Features />
      <Testimonials />
      <FitSection />

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

      {/* Community Application Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 pt-12">
        <CommunityForm />
      </div>

      <Footer />
    </div>
  );
};

export default Community;
