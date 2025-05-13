
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full py-20 flex flex-col items-center justify-center px-4 sm:px-6 bg-launch-purple">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <div className="mb-10">
          <img 
            src="/lovable-uploads/9e01cb2b-d7f4-4b83-adb5-706805de7735.png" 
            alt="Launch by Lunch Logo" 
            className="w-full max-w-[200px] mx-auto"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          The no-code fast lane
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90 mb-12 max-w-3xl mx-auto">
          for non-technical founders, builders, and creators.
        </p>
        
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-launch-orange hover:bg-launch-orange/90 text-white px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => window.open('https://learn.launchbylunch.co/subscribe', '_blank')}
          >
            Join Our Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
