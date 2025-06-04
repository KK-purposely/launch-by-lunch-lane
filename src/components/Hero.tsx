
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/10 via-transparent to-launch-orange/10" />
      <div className="relative w-full py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2">
              <span className="bg-gradient-to-r from-launch-purple via-launch-orange to-launch-purple bg-clip-text text-transparent">
                Launch by Lunch
              </span>
            </h1>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              <Sparkles className="h-5 w-5 text-launch-orange animate-pulse" />
              <span className="text-lg font-semibold uppercase tracking-wide">The No-Code Fast Lane</span>
              <Sparkles className="h-5 w-5 text-launch-purple animate-pulse" />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Turn your ideas into working prototypes in hours, not months. 
            <span className="text-launch-orange font-semibold"> Join the AI-first founders who are building the future.</span>
          </p>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4 max-w-2xl mx-auto mb-8">
            <p className="text-lg font-medium text-red-700 flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Our accelerators typically sell out in less than a week, so we encourage you to apply early.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.location.href = '/accelerators'}
            >
              <span className="flex items-center gap-2">
                Join Our Accelerator
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
