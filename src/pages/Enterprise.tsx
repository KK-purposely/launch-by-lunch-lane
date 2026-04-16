import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhoWeAre from "@/components/WhoWeAre";
import HowYourBusinessChanges from "@/components/HowYourBusinessChanges";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Shield,
  Zap,
  Clock,
} from "lucide-react";

const businessOutcomes = [
  {
    icon: Zap,
    stat: "60%",
    label: "reduction in manual, repetitive tasks",
  },
  {
    icon: Clock,
    stat: "10+",
    label: "hours saved per team member per week",
  },
  {
    icon: Brain,
    stat: "3×",
    label: "faster execution across workflows",
  },
  {
    icon: Shield,
    stat: "95%",
    label: "improvement in consistency & accuracy",
  },
];

const Enterprise = () => {
  return (
    <>
      <Helmet>
        <title>Enterprise AI Services | Launch by Lunch</title>
        <meta name="description" content="We help small and medium-sized businesses adopt AI in a way that actually makes sense, saving money, making teams happier, and future-proofing your business." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-launch-light via-white to-orange-50">
        <HowYourBusinessChanges />

        <section className="bg-white">
          <WhoWeAre />
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">
            Ready to Make AI Work<br />
            <span className="text-launch-orange">for Your Team?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            No jargon. No enterprise sales pitch. Just a conversation about what your team actually needs and how we can help you get there.
          </p>
          <Button
            size="lg"
            className="bg-launch-orange hover:bg-launch-orange/90 text-white px-10 py-4 text-lg rounded-full font-bold transition-all duration-300 shadow-xl hover:scale-105 group"
            onClick={() =>
              window.open("https://calendly.com/karen-launchbylunch/30min", "_blank")
            }
          >
            <span className="flex items-center gap-3">
              Let's Talk About Your Team
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Enterprise;
