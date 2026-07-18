
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  showButtons?: boolean;
}

const Hero = ({ showButtons = true }: HeroProps) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lbl-ink/10 via-white to-lbl-orange/10" />
      <div className="relative w-full px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-4">
                <span className="text-lbl-eggplant">Same Team.</span>
                <br />
                <span className="bg-grad-brand bg-clip-text text-transparent">New Superpowers.</span>
              </h1>

              <hr className="brand-rule mb-5" />

              <p className="text-lg md:text-xl text-lbl-ink/80 font-medium leading-relaxed max-w-lg">
                Helping small businesses save and scale with AI.
              </p>
            </div>

            {/* Right: CTA Buttons */}
            {showButtons && (
              <div className="flex flex-col items-center justify-center gap-6 w-full">
                <img
                  src="/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png"
                  alt="Launch by Lunch Logo"
                  className="h-[148px] md:h-[184px] w-auto mb-2"
                />

                <Button
                  size="lg"
                  className="group w-full max-w-sm bg-gradient-to-r from-lbl-ink to-lbl-orange hover:from-lbl-orange hover:to-lbl-ink text-white px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
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
                  className="w-full max-w-sm px-8 py-6 text-lg border-lbl-orange text-lbl-orange hover:bg-lbl-orange hover:text-white rounded-full font-medium transition-all duration-300"
                  onClick={() => window.open("https://newsletter.launchbylunch.co", "_blank")}
                >
                  Get Our Newsletter
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
