import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { User } from "lucide-react";

const WomenInCommunity = () => {
  const placeholderWomen = [
    { id: 1, name: "Name 1", info: "Info coming soon" },
    { id: 2, name: "Name 2", info: "Info coming soon" },
    { id: 3, name: "Name 3", info: "Info coming soon" },
    { id: 4, name: "Name 4", info: "Info coming soon" },
    { id: 5, name: "Name 5", info: "Info coming soon" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-launch-light via-white to-orange-50">
      <Hero />

      {/* Meet Our Community Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
            Meet 5 Amazing Women from Our Community
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {placeholderWomen.map((woman) => (
            <div
              key={woman.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-orange-100"
            >
              {/* Placeholder for photo */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-launch-purple/20 to-launch-orange/20 flex items-center justify-center">
                <User className="w-16 h-16 text-launch-purple" />
              </div>
              
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                {woman.name}
              </h3>
              
              <p className="text-gray-600 text-center">
                {woman.info}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WomenInCommunity;
