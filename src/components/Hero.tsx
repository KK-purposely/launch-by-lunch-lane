
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
        <div className="max-w-4xl mx-auto text-center pb-16">
          <div className="mb-4">
            <div className="mb-2">
              <img
                src="/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png"
                alt="Launch by Lunch Logo"
                className="h-32 md:h-44 lg:h-56 w-auto mx-auto"
              />
            </div>
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold mb-3 max-w-3xl mx-auto">
            <span className="bg-gradient-to-r from-launch-purple via-pink-500 to-launch-orange bg-clip-text text-transparent">
              Practical AI Adoption for Modern Leadership
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            AI is only powerful when it works with your team — not against it. We cut through the noise and give leaders the right tools, training, and strategy to
            <br />adopt AI with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-start sm:items-center mb-20 max-w-3xl mx-auto">
            {[
              "Identify where AI will actually move your business forward",
              "Build and implement workflows tailored to your team",
              "Train your staff so adoption sticks, not stalls",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-left">
                <CheckCircle2 className="h-5 w-5 text-launch-orange mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base text-muted-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
          
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
