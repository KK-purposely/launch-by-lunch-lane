
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-launch-orange">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Launch Your Idea?
        </h2>

        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join our next cohort and go from idea to launch in record time - no coding required.
        </p>
        
        <div className="flex flex-col items-center gap-8">
          <iframe 
            src="https://embeds.beehiiv.com/dc87f09d-9bd7-4810-9857-6ac39cfd0e75" 
            data-test-id="beehiiv-embed" 
            width="480" 
            height="320" 
            frameBorder="0" 
            scrolling="no" 
            style={{
              borderRadius: "4px", 
              border: "2px solid #e5e7eb", 
              margin: "0", 
              backgroundColor: "transparent"
            }}
          />
          
          <Button 
            size="lg" 
            className="bg-white text-launch-orange hover:bg-white/90 px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => window.open('https://lu.ma/7jv9c0eb', '_blank')}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
