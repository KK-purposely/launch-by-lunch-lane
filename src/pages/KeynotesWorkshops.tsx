import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mic, Sparkles, Users, Shield, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import karenSpeaker from "@/assets/karen-kelly-speaker.jpg";
import karenCredentials from "@/assets/karen-credentials.png";
import katLazell from "@/assets/testimonial-kat-lazell.jpg";
import amandaSwiatocha from "@/assets/testimonial-amanda-swiatocha.jpg";
import jessLynch from "@/assets/testimonial-jess-lynch.jpg";

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
      gradient: "from-launch-purple via-pink-500 to-launch-orange",
      bgGradient: "from-launch-purple/5 via-pink-500/5 to-launch-orange/5",
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
      gradient: "from-launch-purple via-pink-500 to-launch-orange",
      bgGradient: "from-launch-purple/5 via-pink-500/5 to-launch-orange/5",
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
      gradient: "from-launch-purple via-pink-500 to-launch-orange",
      bgGradient: "from-launch-purple/5 via-pink-500/5 to-launch-orange/5",
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
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-launch-purple/10 via-white to-launch-orange/10" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-launch-orange/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-launch-purple/10 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left: Text */}
              <div>
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
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
                >
                  <span className="bg-gradient-to-r from-launch-purple via-pink-500 to-launch-orange bg-clip-text text-transparent">
                    Keynotes and Workshops
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl md:text-3xl font-semibold text-launch-purple mb-5"
                >
                  No matter where you are, you're not behind.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg md:text-xl text-gray-700 leading-relaxed"
                >
                  Every organization comes to AI differently. We build custom
                  adoption programs and deliver inspirational keynotes that meet
                  your culture where it is, so you and your team can move into the
                  future with confidence, not fear.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-7 rounded-2xl bg-white/70 backdrop-blur-sm border border-launch-purple/10 shadow-sm p-4"
                >
                  <img
                    src={karenCredentials}
                    alt="Credentials: TEDx Editor's Pick (selected by TEDx Global, 2026) and Top 100 Innovator (Redwood Media's Top 100 Magazine, 2026)"
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>

              {/* Right: Speaker Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative flex flex-col items-center md:items-end"
              >
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-4 bg-gradient-to-br from-launch-purple/20 to-launch-orange/20 rounded-3xl blur-2xl" />
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-launch-purple/5 to-launch-orange/5 border border-white/50 w-full">
                    <img
                      src={karenSpeaker}
                      alt="Karen Kelly, Co-Founder and CEO of Launch by Lunch"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="relative text-center mt-5">
                    <p className="text-xl font-bold text-launch-purple leading-tight">
                      Karen Kelly
                    </p>
                    <p className="text-base text-gray-700 mt-1">
                      Co-Founder &amp; CEO of Launch by Lunch
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What People Say Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-bold uppercase tracking-wider text-launch-purple mb-5">
              What People Say
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-launch-purple max-w-4xl mx-auto leading-tight">
              "She received the highest feedback scores of any workshop we've ever
              had."
            </h2>
            <p className="text-base md:text-lg text-gray-600 mt-5">
              — Amanda Swiatocha, Chief Marketing Officer, Softheon
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                tag: "ERG Workshop",
                quote:
                  "We brought Karen in to speak to our EmpowerHER female employee resource group. I had high expectations but she surpassed all of them. ",
                highlight:
                  "She received the highest scores of any meeting we had ever had.",
                name: "Amanda Swiatocha",
                role: "Chief Marketing Officer, Softheon",
                image: amandaSwiatocha as string | null,
              },
              {
                tag: "Interactive AI Keynote",
                quote:
                  "We were so lucky to have Karen speak at our women's only conference for elite founders and investors. Within 45 minutes we had built our first app with AI! ",
                highlight:
                  "She's incredibly relatable and makes the complex seem easy, leading to her session being the most talked about of the day!",
                name: "Jess Lynch",
                role: "Founding Partner, FoundersEdge VC",
                image: jessLynch as string | null,
              },
              {
                tag: "Startup AI Instructor",
                quote:
                  "Karen's AI workshop at the CIC accelerator was invigorating and clarifying for many non-technical founders in the room. ",
                highlight:
                  "You could feel the energy shift from intimidation to curiosity, to momentum.",
                name: "Kat Lazell",
                role: "Senior Program Manager, Cambridge Innovation Center (CiC)",
                image: katLazell,
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-launch-purple via-pink-500 to-launch-orange" />
                <div className="p-7 pl-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                    {t.tag}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-5">
                    "{t.quote}
                    <span className="font-bold text-launch-purple">
                      {t.highlight}
                    </span>
                    "
                  </p>
                  <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-launch-purple/20 flex-shrink-0"
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-launch-purple/20 via-pink-500/20 to-launch-orange/20 ring-2 ring-launch-purple/20 flex-shrink-0" />
                    )}
                    <div>
                      <p className="text-lg font-bold text-launch-purple">
                        — {t.name}
                      </p>
                      <p className="text-lg text-gray-600 mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* On Stage Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-launch-purple/10 via-white to-launch-orange/10" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
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
              We bring raw honesty, strategic clarity, and contagious energy to every
              stage. These are our most frequently requested topics.
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
                            className="flex items-start gap-2 text-lg text-gray-700 leading-relaxed"
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
