
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  showButtons?: boolean;
}

const Hero = ({ showButtons = true }: HeroProps) => {
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
          
          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-3 max-w-3xl mx-auto">
            Practical AI Adoption for Modern Leadership
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            AI is only powerful when it actually works with your team — not against it. We cut through the noise and give leaders the right tools, training, and strategy to adopt AI with confidence.
          </p>
          
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.open("https://luma.com/launchbylunch", "_blank")}
              >
                <span className="flex items-center gap-2">
                  Upcoming Workshops
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg border-launch-orange text-launch-orange hover:bg-launch-orange hover:text-white rounded-full font-medium transition-all duration-300"
                asChild
              >
                <a href="/claude-code">Claude Code</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
