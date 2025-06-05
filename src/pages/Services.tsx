
import React from "react";
import PackagesSection from "@/components/services/PackagesSection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-launch-purple">Our Services</h1>
        
        {/* Services Packages Section */}
        <PackagesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
