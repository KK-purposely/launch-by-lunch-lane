import { Helmet } from "react-helmet-async";
import secondBrainImg from "@/assets/second-brain.png";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhoWeAre from "@/components/WhoWeAre";
import HowYourBusinessChanges from "@/components/HowYourBusinessChanges";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Brain,
  Shield,
  Zap,
  Clock,
  MessageSquare,
  Lightbulb,
} from "lucide-react";



const thisIsForYou = [
  "Your team is talking about AI but not actually using it",
  "You've tried tools but nothing has stuck",
  "You don't have time to figure this out yourself",
  "You need to move quickly without hiring a full technical team",
];

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

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Launch by Lunch - AI Adoption for SMBs</title>
        <meta name="description" content="We help small and medium-sized businesses adopt AI in a way that actually makes sense, saving money, making teams happier, and future-proofing your business." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://launchbylunch.com/" />
        <meta property="og:title" content="Launch by Lunch - AI Adoption for SMBs" />
        <meta property="og:description" content="We help small and medium-sized businesses adopt AI in a way that actually makes sense, saving money, making teams happier, and future-proofing your business." />
        <meta property="og:image" content="https://cdn.lovable.app/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://launchbylunch.com/" />
        <meta property="twitter:title" content="Launch by Lunch - AI Adoption for SMBs" />
        <meta property="twitter:description" content="We help small and medium-sized businesses adopt AI in a way that actually makes sense, saving money, making teams happier, and future-proofing your business." />
        <meta property="twitter:image" content="https://cdn.lovable.app/lovable-uploads/8f3eba1c-0f11-4411-9774-5671f6239bf2.png" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-launch-light via-white to-orange-50">
        <Hero />

        {/* How Your Business is Working Today */}
        <HowYourBusinessChanges />

        {/* Who We Are */}
        <section className="bg-white">
          <WhoWeAre />
        </section>

        {/* Business Outcomes */}
        <section className="bg-gradient-to-br from-launch-light via-white to-orange-50 py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-3 text-center">
              What You Can Expect
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              These are the average results we see from our clients.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {businessOutcomes.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div key={i} className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border hover:shadow-lg hover:border-launch-purple/20 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-launch-purple to-launch-orange rounded-xl flex items-center justify-center mx-auto mb-3">
                      <ItemIcon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-1">
                      {item.stat}
                    </p>
                    <p className="text-muted-foreground font-medium text-sm">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
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

export default Index;
