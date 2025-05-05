
import { Check } from "lucide-react";

const features = [
  "Build without code",
  "Launch your MVP in days",
  "Expert mentorship",
  "Community support",
  "Investor connections",
  "Real business outcomes"
];

const Features = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-launch-light">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-launch-purple text-center mb-12">
          Accelerate Your Startup Journey
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-full bg-launch-orange p-2 flex items-center justify-center">
                <Check className="h-5 w-5 text-white" />
              </div>
              <p className="text-lg font-medium text-launch-purple">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
