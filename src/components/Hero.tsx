
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 bg-launch-purple">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <div className="mb-10">
          <img 
            src="/lovable-uploads/fb164285-9e6e-4bcd-a96f-4fb850c4aad9.png" 
            alt="Launch by Lunch Logo with co-founders" 
            className="w-full max-w-2xl mx-auto"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          The no-code fast lane
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90 mb-12 max-w-3xl mx-auto">
          for non-technical founders, builders, and creators.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-launch-orange hover:bg-launch-orange/90 text-white px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Join Our Program
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full font-medium transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
