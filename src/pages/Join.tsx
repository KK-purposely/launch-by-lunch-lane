
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/join/HeroSection";
import MainServicesSection from "@/components/join/MainServicesSection";
import PointOfServiceSection from "@/components/join/PointOfServiceSection";
import BottomCTASection from "@/components/join/BottomCTASection";
import Footer from "@/components/Footer";

const Join = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-launch-light via-white to-orange-50">
      <HeroSection />
      <MainServicesSection onServiceClick={handleServiceClick} />
      <PointOfServiceSection onServiceClick={handleServiceClick} />
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
  );
};

export default Join;
