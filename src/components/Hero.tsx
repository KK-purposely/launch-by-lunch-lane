
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface HeroProps {
  showButtons?: boolean;
}

const Hero = ({ showButtons = true }: HeroProps) => {
  const bullets = [
    "Identify where AI will actually move your business forward",
    "Build and implement workflows tailored to your team",
    "Train your staff so adoption sticks, not stalls",
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-launch-purple/10 via-white to-launch-orange/10" />
      <div className="relative w-full px-4 sm:px-6 pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png"
            alt="Launch by Lunch Logo"
            className="h-28 md:h-40 lg:h-48 w-auto mx-auto mb-8"
          />

          <h1 className="text-2xl md:text-4xl font-bold mb-4 max-w-3xl mx-auto">
            <span className="bg-gradient-to-r from-launch-purple via-pink-500 to-launch-orange bg-clip-text text-transparent">
              Practical AI Adoption for Modern Leadership
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            AI is only powerful when it works with your team — not against it. We cut through the noise and give leaders the right tools, training, and strategy to adopt AI with confidence.
          </p>

          <div className="flex flex-col gap-3 max-w-md mx-auto mb-10">
            {bullets.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-left">
                <CheckCircle2 className="h-5 w-5 text-launch-orange mt-0.5 flex-shrink-0" />
                <span className="text-base text-muted-foreground font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.open("https://calendly.com/karen-launchbylunch/30min", "_blank")}
              >
                <span className="flex items-center gap-2">
                  Book a Consultation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg border-launch-orange text-launch-orange hover:bg-launch-orange hover:text-white rounded-full font-medium transition-all duration-300"
                asChild
              >
                <a href="#what-we-do">What We Do</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
