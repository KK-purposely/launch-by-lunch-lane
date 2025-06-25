
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToJoinWaitlist = () => {
    const joinSection = document.querySelector('[data-section="join-waitlist"]');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/20 via-launch-orange/10 to-launch-orange/20" />
      <div className="relative w-full py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <div className="mb-2">
              <img
                src="/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png"
                alt="Launch by Lunch Logo"
                className="h-32 md:h-44 lg:h-56 w-auto mx-auto"
              />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-relaxed">
            <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              Hey founding members!
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            You're the first to receive an invite to join our new peer to peer community for founders and fractionals. We've got some amazing goodies in store for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
