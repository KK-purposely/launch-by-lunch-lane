import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mic, Sparkles, Users, Shield, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const KeynotesWorkshops = () => {
  const topics = [
    {
      icon: Quote,
      title: "Communication: Storytelling as a Superpower",
      description:
        "How to find your narrative, own your story, and use it as your most powerful trust-building tool, in pitches, on stages, and in life.",
      gradient: "from-launch-purple to-launch-purple/70",
      bgGradient: "from-white to-launch-purple/5",
    },
    {
      icon: Sparkles,
      title: "AI & Leadership: Inspiring Teams in the AI Age",
      description:
        "Practical, no-hype guidance on how leaders can integrate AI to move faster, empower their teams, and stay ahead, without losing the human touch.",
      gradient: "from-launch-orange to-launch-orange/70",
      bgGradient: "from-white to-launch-orange/5",
    },
    {
      icon: Shield,
      title: "Resilience: Leading Effectively Without a Playbook",
      description:
        "A guide for the moments that don't make the highlight reel. How to communicate with clarity, trust your gut, and let your experience and relationships carry you through.",
      gradient: "from-launch-purple to-launch-orange",
      bgGradient: "from-launch-purple/5 to-launch-orange/5",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Keynotes & Workshops | Launch by Lunch</title>
        <meta
          name="description"
          content="Keynotes and workshops on AI adoption, leadership, storytelling, and resilience. Bring raw honesty, strategic clarity, and contagious energy to your stage."
        />
        <link rel="canonical" href="https://launchbylunch.co/keynotes-workshops" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-launch-purple/5 via-white to-launch-orange/5 py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-launch-orange/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-launch-purple/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-launch-purple/20 shadow-sm mb-6"
          >
            <Mic className="h-4 w-4 text-launch-orange" />
            <span className="text-sm font-medium text-launch-purple">
              Keynotes & Workshops
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              AI Adoption
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-launch-purple mb-6"
          >
            AI That Fits Your Culture
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Every organization has a different relationship with change. Some teams are
            eager. Some are skeptical. Most are somewhere in between, and that's
            exactly where I start.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-launch-purple to-launch-purple/70 rounded-xl flex items-center justify-center mb-5 shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">
                Fit before speed
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Before recommending a single tool, I get to know your leaders, your
                culture, and your people's attitudes toward AI. The goal isn't speed,
                it's fit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-launch-orange to-launch-orange/70 rounded-xl flex items-center justify-center mb-5 shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-launch-orange mb-4">
                More powerful, not replaceable
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The mission: increase revenue per employee, not eliminate employees.
                AI adoption done right makes your people more powerful, not more
                replaceable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* On Stage Section */}
      <section className="py-20 bg-gradient-to-br from-launch-purple/5 via-white to-launch-orange/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-launch-orange/20 shadow-sm mb-5">
              <Mic className="h-4 w-4 text-launch-orange" />
              <span className="text-sm font-bold uppercase tracking-wider text-launch-purple">
                On Stage
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                Keynote & Workshop Topics
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              I bring raw honesty, strategic clarity, and contagious energy to every
              stage. These are my most frequently requested topics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={`relative overflow-hidden h-full bg-gradient-to-br ${topic.bgGradient} border-2 border-gray-100 hover:border-launch-orange/30 hover:shadow-xl transition-all duration-300 group`}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${topic.gradient}`}
                    />
                    <CardContent className="p-7">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${topic.gradient} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-launch-purple mb-3 leading-snug">
                        {topic.title}
                      </h3>
                      <p className="text-base text-gray-700 leading-relaxed">
                        {topic.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-gradient-to-br from-launch-purple to-launch-orange p-10 md:p-14 shadow-2xl overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Bring this energy to your stage
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's talk about your event, your audience, and the conversation you
                want to start.
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-launch-purple hover:bg-white/90 px-8 py-6 text-lg rounded-full font-bold shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  <span className="flex items-center gap-2">
                    Book a Conversation
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KeynotesWorkshops;
