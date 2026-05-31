
import React from "react";
import { Helmet } from "react-helmet-async";
import PackagesSection from "@/components/services/PackagesSection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Services & Packages | Launch by Lunch</title>
        <meta name="description" content="Explore Launch by Lunch service packages: AI strategy, implementation, and team enablement for small and mid-sized businesses ready to adopt AI." />
        <link rel="canonical" href="https://launchbylunch.co/services" />
        <meta property="og:title" content="Services & Packages | Launch by Lunch" />
        <meta property="og:description" content="AI strategy, implementation, and enablement packages tailored to small and mid-sized businesses." />
        <meta property="og:url" content="https://launchbylunch.co/services" />
        <meta property="og:type" content="website" />
      </Helmet>
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
