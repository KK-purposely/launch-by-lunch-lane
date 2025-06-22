import { Code, Users, Rocket, Clock, Sparkles, CheckCircle, Heart, DollarSign, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const differentiators = [
    {
      icon: Brain,
      title: "No Code-Splaining",
      description: "Learn AI and no-code tools in plain English. No technical jargon, no overwhelming complexity—just practical knowledge for non-technical founders.",
      gradient: "from-purple-400 to-pink-400",
      bgGradient: "from-purple-50 via-pink-50 to-orange-50"
    },
    {
      icon: Heart,
      title: "Community Over Competition",
      description: "End founder loneliness. Connect with like-minded entrepreneurs who understand your journey and celebrate your wins alongside their own.",
      gradient: "from-pink-400 to-rose-400",
      bgGradient: "from-pink-50 via-rose-50 to-red-50"
    },
    {
      icon: DollarSign,
      title: "Revenue Before Investment",
      description: "Build stellar MVPs using AI-prototyping tools that generate real revenue from day one—before you ever need an investor check.",
      gradient: "from-orange-400 to-amber-400",
      bgGradient: "from-orange-50 via-amber-50 to-yellow-50"
    }
  ];

  const features = [
    {
      icon: Code,
      title: "Meet Investors",
      description: "Learn to build working prototypes using AI and no-code tools in record time"
    },
    {
      icon: Clock,
      title: "Join AI Accelerators",
      description: "Transform your idea into reality with just 4 focused learning sessions"
    },
    {
      icon: Users,
      title: "Learn with Friends",
      description: "Connect with AI-first founders and get guidance from experienced entrepreneurs"
    },
    {
      icon: Rocket,
      title: "Launch Today",
      description: "Graduate with a working prototype and the knowledge to scale your vision"
    }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Enhanced background with multiple gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/5 via-transparent to-launch-orange/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-launch-orange/3 via-transparent to-launch-purple/3" />
      
      {/* Decorative geometric shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-launch-purple/10 to-launch-orange/10 rounded-full blur-xl" />
      <div className="absolute top-32 right-20 w-32 h-32 bg-gradient-to-br from-launch-orange/10 to-launch-purple/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-lg" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* What Makes Us Different Section */}
        <div className="mb-20">
          {/* Enhanced header with decorative elements */}
          <div className="text-center mb-20 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-24 h-1 bg-gradient-to-r from-launch-purple to-launch-orange rounded-full opacity-60" />
            
            <div className="inline-flex items-center gap-3 text-launch-orange/70 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-launch-orange to-transparent" />
              <span className="text-sm font-semibold uppercase tracking-widest">What Sets Us Apart</span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-launch-orange to-transparent" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 relative">
              <span className="bg-gradient-to-r from-launch-purple via-pink-500 to-launch-orange bg-clip-text text-transparent">
                What makes us different.
              </span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-launch-purple to-launch-orange rounded-full opacity-30" />
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Welcome to the new eco-system of founders, fractionals, and investors 
              <span className="text-launch-orange font-semibold"> funding the next generation of AI-first startups.</span>
            </p>
          </div>
          
          {/* Enhanced cards with better visual hierarchy */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {differentiators.map((item, index) => (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br ${item.bgGradient} backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:rotate-1`}
                style={{
                  animation: `fade-in 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Decorative corner elements */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-white/30 to-transparent rounded-full opacity-50" />
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-40" />
                
                {/* Enhanced icon with multiple effects */}
                <div className="relative mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <item.icon className="h-10 w-10 text-white drop-shadow-sm" />
                  </div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse" />
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse" style={{ animationDelay: '0.2s' }} />
                </div>
                
                {/* Enhanced typography */}
                <h3 className="text-2xl lg:text-3xl font-bold text-launch-purple mb-6 group-hover:bg-gradient-to-r group-hover:from-launch-purple group-hover:to-launch-orange group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  {item.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed text-lg relative z-10">
                  {item.description}
                </p>
                
                {/* Hover reveal element */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Enhanced CTA section */}
          <div className="text-center relative">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-launch-purple to-launch-orange rounded-full blur-lg opacity-30 animate-pulse" />
              <Button 
                size="lg" 
                className="relative bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white px-12 py-6 text-xl rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
                onClick={() => window.location.href = '/join'}
              >
                <span className="flex items-center gap-3">
                  Learn More
                  <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Original Features Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-4">
            <Sparkles className="h-5 w-5 text-launch-orange animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wide">Why Choose Launch by Lunch</span>
            <Sparkles className="h-5 w-5 text-launch-purple animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              Your Journey with Us
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Where the new eco-system of founders, fractionals, and investors 
            <span className="text-launch-orange font-semibold"> build, scale and fund the next generation of AI-first startups.</span>
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
              Join our Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
