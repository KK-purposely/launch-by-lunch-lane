
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 bg-launch-light">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <div className="mb-10">
          <img 
            src="/lovable-uploads/83aacd6e-7468-4b31-b18e-b03214d01cc0.png" 
            alt="Launch by Lunch Logo with Karen Kelly and Stephan Smith" 
            className="w-full max-w-xl mx-auto" // Changed max-w-2xl to max-w-xl (~25% reduction)
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-launch-purple mb-6 tracking-tight">
          The no-code fast lane
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl font-medium text-launch-purple/80 mb-12 max-w-3xl mx-auto">
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
            className="bg-transparent border-2 border-launch-purple text-launch-purple hover:bg-launch-purple/10 px-8 py-6 text-lg rounded-full font-medium transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
