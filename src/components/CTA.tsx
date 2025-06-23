
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  const scrollToJoinWaitlist = () => {
    const joinSection = document.querySelector('[data-section="join-waitlist"]');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 bg-gradient-to-r from-launch-orange via-launch-orange to-launch-purple relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-launch-orange/90 to-launch-purple/90" />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-white/80 mb-6">
          <Sparkles className="h-6 w-6 animate-pulse" />
          <span className="text-sm font-semibold uppercase tracking-wide">Start Your Journey Today</span>
          <Sparkles className="h-6 w-6 animate-pulse" />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Launch Your Idea?
        </h2>

        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Join our next cohort and go from idea to launch in record time - no coding required.
          <span className="font-semibold"> The future belongs to AI-first founders.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="group bg-white text-launch-orange hover:bg-white/90 px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => window.open('https://learn.launchbylunch.co/subscribe', '_blank')}
          >
            <span className="flex items-center gap-2">
              Subscribe to our Newsletter
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-launch-orange rounded-full font-medium transition-all duration-300"
            onClick={scrollToJoinWaitlist}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
