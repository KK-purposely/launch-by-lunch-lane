
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
      <div className="relative w-full px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left: Text + Bullets */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                <span className="bg-gradient-to-r from-launch-purple via-pink-500 to-launch-orange bg-clip-text text-transparent">
                  Practical AI Adoption for Modern Leadership
                </span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                AI is only powerful when it works with your team — not against it. We cut through the noise and give leaders the right tools, training, and strategy to adopt AI with confidence.
              </p>

              <div className="flex flex-col gap-3 mb-2">
                {bullets.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-launch-orange mt-0.5 flex-shrink-0" />
                    <span className="text-base text-muted-foreground font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA Buttons */}
            {showButtons && (
              <div className="flex flex-col items-center md:items-end justify-center gap-5">
                <img
                  src="/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png"
                  alt="Launch by Lunch Logo"
                  className="h-24 md:h-32 w-auto"
                />
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 flex flex-col items-center gap-6 w-full max-w-sm">
                  <p className="text-lg font-semibold text-launch-purple text-center">
                    Ready to get started?
                  </p>
                  <Button
                    size="lg"
                    className="group w-full bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
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
                    className="w-full px-8 py-6 text-lg border-launch-orange text-launch-orange hover:bg-launch-orange hover:text-white rounded-full font-medium transition-all duration-300"
                    asChild
                  >
                    <a href="#what-we-do">What We Do</a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
