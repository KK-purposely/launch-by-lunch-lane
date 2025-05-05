
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/83aacd6e-7468-4b31-b18e-b03214d01cc0.png";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col items-center pt-8 px-4 sm:px-6 pb-12 bg-launch-purple">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <div className="mb-2 relative mt-0" style={{ height: "auto", width: "100%", maxWidth: "500px", margin: "0 auto" }}>
          {/* Low-quality placeholder with blur-up technique */}
          <div 
            className={`w-full max-w-xl mx-auto bg-gray-200 transition-opacity duration-300 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}
            style={{ 
              aspectRatio: '3/1', 
              background: 'linear-gradient(120deg, #e5e7eb 8%, #f3f4f6 18%, #e5e7eb 33%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite linear'
            }}
          />
          
          {/* Actual image */}
          <img 
            src="/lovable-uploads/83aacd6e-7468-4b31-b18e-b03214d01cc0.png" 
            alt="Launch by Lunch Logo with Karen Kelly and Stephan Smith" 
            className={`w-full max-w-xl mx-auto transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ margin: '0 auto' }}
            loading="eager"
            fetchPriority="high"
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
            onClick={() => window.open('https://lu.ma/7jv9c0eb', '_blank')}
          >
            Join Our Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
