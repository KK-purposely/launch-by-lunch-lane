import React, { useState, useRef } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { User, ArrowRight, Play, Pause, Volume2 } from "lucide-react";

const WomenInCommunity = () => {
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});

  const placeholderWomen = [
    { id: 1, name: "Alison Campbell", info: "Founder & CEO UnBurnt", photo: "/lovable-uploads/alison-campbell.jpg", linkedinUrl: "https://www.linkedin.com/in/alison-campbell-3035b63/", audioUrl: "/lovable-uploads/alison-campbell-audio.m4a" },
    { id: 2, name: "Samanda J.V. Jean", info: "Co-Founder MyCycleIQ", photo: "/lovable-uploads/samanda-jean.jpg", linkedinUrl: "https://www.linkedin.com/in/samanda-j-v-jean/", audioUrl: "/lovable-uploads/samanda-jean-audio.m4a" },
    { id: 3, name: "Alisha Overton", info: "Founder & CEO The AO Planner Company", photo: "/lovable-uploads/alisha-overton.jpg", linkedinUrl: "https://www.linkedin.com/in/alishaoverton/", audioUrl: "/lovable-uploads/alisha-overton-audio.m4a" },
    { id: 4, name: "Ariel Galipeau", info: "Co-Founder, Confidante", photo: "/lovable-uploads/ariel-galipeau.jpg", linkedinUrl: "https://www.linkedin.com/in/arielgalipeau/", audioUrl: "/lovable-uploads/ariel-galipeau-audio.m4a" },
  ];

  const toggleAudio = (id: number) => {
    const audio = audioRefs.current[id];
    if (!audio) return;

    if (playingAudio === id) {
      audio.pause();
      setPlayingAudio(null);
    } else {
      // Pause any currently playing audio
      Object.values(audioRefs.current).forEach(a => a?.pause());
      audio.play();
      setPlayingAudio(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-launch-light via-white to-orange-50">
      {/* Simple Hero with Logo Only */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/20 via-launch-orange/10 to-launch-orange/20" />
        <div className="relative w-full py-8 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <img
                src="/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png"
                alt="Launch by Lunch Logo"
                className="h-32 md:h-44 lg:h-56 w-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Community Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
            Tap to Hear From 4 AI-First Women in our Community
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {placeholderWomen.map((woman) => (
            <div
              key={woman.id}
              className="group relative bg-gradient-to-br from-white to-orange-50/30 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-launch-purple/20 hover:scale-[1.02] overflow-hidden"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-launch-purple/5 to-launch-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              {/* Photo */}
              <div className="relative z-10">
                {woman.photo ? (
                  <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-launch-purple/10 group-hover:ring-launch-purple/30 transition-all duration-500 group-hover:scale-105">
                    <img 
                      src={woman.photo} 
                      alt={woman.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-36 h-36 mx-auto mb-6 rounded-full bg-gradient-to-br from-launch-purple/20 to-launch-orange/20 flex items-center justify-center ring-4 ring-launch-purple/10 group-hover:ring-launch-purple/30 transition-all duration-500">
                    <User className="w-16 h-16 text-launch-purple" />
                  </div>
                )}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                  {woman.linkedinUrl ? (
                    <a 
                      href={woman.linkedinUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-launch-purple transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-launch-purple after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                    >
                      {woman.name}
                    </a>
                  ) : (
                    woman.name
                  )}
                </h3>
                
                <p className="text-gray-600 text-center mb-4 text-sm">
                  {woman.info}
                </p>
              </div>

              {woman.audioUrl && (
                <div className="relative z-10 flex items-center justify-center gap-3 mt-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-launch-purple/10 to-launch-orange/10 group-hover:from-launch-purple/20 group-hover:to-launch-orange/20 transition-all duration-300">
                    <Volume2 className="w-5 h-5 text-launch-purple" />
                  </div>
                  <button
                    onClick={() => toggleAudio(woman.id)}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    {playingAudio === woman.id ? (
                      <>
                        <Pause className="w-4 h-4" />
                        <span className="text-sm font-semibold">Stop</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        <span className="text-sm font-semibold">Listen to Pitch</span>
                      </>
                    )}
                  </button>
                  <audio
                    ref={(el) => (audioRefs.current[woman.id] = el)}
                    src={woman.audioUrl}
                    onEnded={() => setPlayingAudio(null)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Join Community CTA */}
        <div className="flex justify-center mt-16">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => window.open('https://innercircle.launchbylunch.co/checkout/inner-circle-membership', '_blank')}
          >
            <span className="flex items-center gap-2">
              Join Our Community
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WomenInCommunity;
