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
      title: "Communication: Storytelling as a Superpower with AI",
      description:
        "Your team won't adopt AI because of a tool, they'll adopt it because of a story. We dig into how to find your why, craft a repeatable narrative about how AI will empower your people at work, and turn that story into the trust-building tool that drives real adoption, in pitches, on stages, and in everyday team conversations.",
      details: [
        "Finding your personal and organizational why for AI",
        "Building a repeatable narrative your team can echo",
        "Translating technical change into human language",
        "Storytelling frameworks for pitches, all-hands, and 1:1s",
      ],
      gradient: "from-launch-purple to-launch-purple/70",
      bgGradient: "from-white to-launch-purple/5",
    },
    {
      icon: Sparkles,
      title: "AI & Leadership: Inspiring Teams in the AI Age",
      description:
        "Practical, no-hype guidance on how leaders can integrate AI to move faster, empower their teams, and stay ahead, without losing the human touch.",
      details: [
        "Leading change when half your team is excited and half is anxious",
        "Where to start with AI: high-leverage workflows that build belief",
        "Setting guardrails that protect culture, IP, and customer trust",
        "Measuring what matters: reducing costs, improving employee satisfaction, and creating scalable change",
      ],
      gradient: "from-launch-orange to-launch-orange/70",
      bgGradient: "from-white to-launch-orange/5",
    },
    {
      icon: Shield,
      title: "Resilience: Leading Effectively Without a Playbook",
      description:
        "A guide for the moments that don't make the highlight reel. How to communicate with clarity, trust your gut, and let your experience and relationships carry you through.",
      details: [
        "Decision-making under uncertainty when there's no precedent",
        "Communicating hard truths without losing your team",
        "Leaning on relationships and reputation as your real safety net",
        "Personal practices that keep you grounded through the hard seasons",
      ],
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
              Keynotes and Workshops
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-launch-purple mb-6"
          >
            No matter where you are, you're not behind.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Every organization comes to AI differently. I build custom adoption
            programs and deliver inspirational keynotes that meet your culture where
            it is, so you and your team can move into the future with confidence,
            not fear.
          </motion.p>
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
                On Stage Topics
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
                      <h3 className="text-2xl font-bold text-launch-purple mb-3 leading-snug">
                        {topic.title}
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        {topic.description}
                      </p>
                      <ul className="space-y-2 pt-3 border-t border-gray-100">
                        {topic.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2 text-base text-gray-700 leading-relaxed"
                          >
                            <span
                              className={`mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-br ${topic.gradient} flex-shrink-0`}
                            />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
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
