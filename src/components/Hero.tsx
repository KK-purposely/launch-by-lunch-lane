

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/10 via-transparent to-launch-orange/10" />
      <div className="relative w-full py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Founders Section */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <img
                    src="/lovable-uploads/a25b125a-4110-46e2-bf28-7cd7e60e633f.png"
                    alt="Karen Kelly"
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-gradient-to-r from-launch-purple to-launch-orange shadow-lg"
                    style={{
                      borderImage: 'linear-gradient(45deg, #2A1747, #F27B35) 1'
                    }}
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-launch-purple to-launch-orange p-1">
                    <img
                      src="/lovable-uploads/a25b125a-4110-46e2-bf28-7cd7e60e633f.png"
                      alt="Karen Kelly"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-800">Karen Kelly</h3>
                <p className="text-sm text-gray-600">CEO, Non-Techy</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-launch-purple to-launch-orange p-1">
                    <img
                      src="/lovable-uploads/de950dd0-67d3-45fd-b2d5-e419d56f3c2e.png"
                      alt="Stephan Smith"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <img
                    src="/lovable-uploads/de950dd0-67d3-45fd-b2d5-e419d56f3c2e.png"
                    alt="Stephan Smith"
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover opacity-0"
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-800">Stephan Smith</h3>
                <p className="text-sm text-gray-600">CTO, No Code Champion</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="mb-4">
              <img
                src="/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png"
                alt="Launch by Lunch Logo"
                className="h-24 md:h-32 lg:h-40 w-auto mx-auto"
              />
            </div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              <Sparkles className="h-5 w-5 text-launch-orange animate-pulse" />
              <span className="text-lg font-semibold uppercase tracking-wide">The No-Code Fast Lane</span>
              <Sparkles className="h-5 w-5 text-launch-purple animate-pulse" />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Founded by CTO and non-technical founder duo with the shared belief that you don't need a tech team or investor dollars to launch something real and revenue generating today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.location.href = '/join'}
            >
              <span className="flex items-center gap-2">
                Join Our Community
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg border-launch-orange text-launch-orange hover:bg-launch-orange hover:text-white rounded-full font-medium transition-all duration-300"
              onClick={() => window.open('https://learn.launchbylunch.co/subscribe', '_blank')}
            >
              Get Our Newsletter
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              No coding required
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Expert guidance included
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Working prototype guaranteed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

