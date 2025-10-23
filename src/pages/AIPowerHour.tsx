import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";

const AIPowerHour = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>AI Tools Power Hour - Launch by Lunch</title>
        <meta name="description" content="Join Karen Kelly, CEO of Launch by Lunch, for an interactive session exploring AI-powered tools including Crystal Knows, Zapier Agents, and Lovable." />
      </Helmet>
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-launch-purple via-launch-purple/90 to-launch-orange/80 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Tools Power Hour
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Unlock the power of AI to transform your business operations
            </p>
            <div className="text-lg">
              <p className="mb-2">Presented by</p>
              <p className="text-2xl font-semibold">
                <a 
                  href="https://www.linkedin.com/in/karen-kelly-daring-greatly/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-launch-orange transition-colors underline decoration-2"
                >
                  Karen Kelly
                </a>
              </p>
              <p className="text-white/80">CEO, Launch by Lunch</p>
            </div>
          </div>
        </section>

        {/* Agenda Section */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              Session Agenda
            </h2>
            
            <div className="space-y-8">
              {/* Item 1 - Crystal Knows */}
              <div className="relative border-2 border-launch-purple/20 rounded-2xl p-8 bg-gradient-to-br from-white to-launch-purple/5">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-launch-purple to-launch-orange flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Build better teams that sell more with Crystal Knows
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <a href="https://www.crystalknows.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-launch-purple hover:text-launch-orange transition-colors underline">Crystal Knows</a> is an AI-powered personality assessment platform that helps you understand communication styles and build stronger relationships. By analyzing personality traits using DISC methodology, Crystal provides actionable insights to improve team dynamics, enhance sales conversations, and communicate more effectively with clients and colleagues. Learn how to leverage personality data to close more deals and create high-performing teams.
                </p>
              </div>

              {/* Item 2 - Zapier */}
              <div className="relative border-2 border-launch-purple/20 rounded-2xl p-8 bg-gradient-to-br from-white to-launch-orange/5">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-launch-purple to-launch-orange flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Demo a simple productivity agent with Zapier
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <a href="https://zapier.com/agents" target="_blank" rel="noopener noreferrer" className="font-semibold text-launch-purple hover:text-launch-orange transition-colors underline">Zapier Agents</a> represent the next evolution of automation—AI-powered agents that can handle complex, multi-step workflows with minimal setup. Unlike traditional Zaps, these intelligent agents can make decisions, adapt to context, and execute sophisticated tasks autonomously. We'll demonstrate how to build a productivity agent that can manage your calendar, prioritize tasks, and streamline your daily operations—all without writing a single line of code.
                </p>
              </div>

              {/* Item 3 - Lovable */}
              <div className="relative border-2 border-launch-purple/20 rounded-2xl p-8 bg-gradient-to-br from-white to-launch-purple/5">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-launch-purple to-launch-orange flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Create a Web App with Lovable
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <a href="https://lovable.dev/" target="_blank" rel="noopener noreferrer" className="font-semibold text-launch-purple hover:text-launch-orange transition-colors underline">Lovable</a> is a revolutionary AI-powered web development platform that turns your ideas into fully functional web applications in minutes. Using natural language, you can describe what you want to build, and Lovable's AI generates production-ready React code with beautiful, responsive designs. Whether you're building an MVP, internal tool, or customer-facing application, Lovable eliminates the technical barriers to bringing your vision to life—no coding experience required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-launch-purple/10 to-launch-orange/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Ready to transform your business with AI?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join Launch by Lunch to access exclusive resources, tools, and community support for your AI journey.
            </p>
            <a 
              href="/"
              className="inline-block px-8 py-4 bg-gradient-to-r from-launch-purple to-launch-orange text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              Learn More About Launch by Lunch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIPowerHour;
