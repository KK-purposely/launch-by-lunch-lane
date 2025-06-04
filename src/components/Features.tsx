
import { Code, Users, Rocket, Clock, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Vibe Coding",
      description: "Learn to build working prototypes using AI and no-code tools in record time"
    },
    {
      icon: Clock,
      title: "4-Hour Accelerators",
      description: "Transform your idea into reality with just 4 focused learning sessions"
    },
    {
      icon: Users,
      title: "Expert Community",
      description: "Connect with AI-first founders and get guidance from experienced entrepreneurs"
    },
    {
      icon: Rocket,
      title: "Launch Ready",
      description: "Graduate with a working prototype and the knowledge to scale your vision"
    }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/5 via-transparent to-launch-orange/5" />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-4">
            <Sparkles className="h-5 w-5 text-launch-orange animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wide">Why Choose Launch by Lunch</span>
            <Sparkles className="h-5 w-5 text-launch-purple animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              Build. Launch. Scale.
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're not just teaching you to code - we're teaching you to 
            <span className="text-launch-orange font-semibold"> build the future with AI as your co-pilot.</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-launch-orange"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/20 to-launch-orange/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-16 h-16 bg-gradient-to-r from-launch-purple to-launch-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-launch-purple mb-4 group-hover:bg-gradient-to-r group-hover:from-launch-purple group-hover:to-launch-orange group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-launch-purple/10 via-launch-orange/10 to-launch-purple/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                Ready to Join the Movement?
              </span>
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Don't let code and cost stand between you and your vision. Start your journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-8">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Small group learning
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Expert mentorship
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Proven methodology
              </span>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.location.href = '/join'}
            >
              Explore All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
