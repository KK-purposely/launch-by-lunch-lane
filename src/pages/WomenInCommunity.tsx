import React, { useState, useRef } from "react";
import Hero from "@/components/Hero";
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
    { id: 4, name: "Ariel Galipeau", info: "Co-Founder, Confidante", photo: "/lovable-uploads/ariel-galipeau.jpg", linkedinUrl: null, audioUrl: "/lovable-uploads/ariel-galipeau-audio.m4a" },
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
      <Hero showButtons={false} />

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
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-orange-100"
            >
              {/* Photo */}
              {woman.photo ? (
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={woman.photo} 
                    alt={woman.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-launch-purple/20 to-launch-orange/20 flex items-center justify-center">
                  <User className="w-16 h-16 text-launch-purple" />
                </div>
              )}
              
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                {woman.linkedinUrl ? (
                  <a 
                    href={woman.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-launch-purple transition-colors underline"
                  >
                    {woman.name}
                  </a>
                ) : (
                  woman.name
                )}
              </h3>
              
              <p className="text-gray-600 text-center mb-3">
                {woman.info}
              </p>

              {woman.audioUrl && (
                <div className="flex items-center justify-center gap-2">
                  <Volume2 className="w-4 h-4 text-launch-purple" />
                  <button
                    onClick={() => toggleAudio(woman.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-launch-purple/10 hover:bg-launch-purple/20 text-launch-purple rounded-full transition-colors"
                  >
                    {playingAudio === woman.id ? (
                      <>
                        <Pause className="w-4 h-4" />
                        <span className="text-sm font-medium">Stop</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        <span className="text-sm font-medium">Listen</span>
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
