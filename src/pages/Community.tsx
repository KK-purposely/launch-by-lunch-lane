
import React, { useEffect } from "react";
import CommunityForm from "@/components/community/CommunityForm";
import CommunityHeroSection from "@/components/community/CommunityHeroSection";

const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-launch-light via-white to-orange-50">
      <CommunityHeroSection />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 pt-12">
        {/* Community Form */}
        <CommunityForm />
      </div>
    </div>
  );
};

export default Community;
