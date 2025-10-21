import React from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, Zap, BookOpen, ThumbsUp, Share2, Calendar } from "lucide-react";

const CommunityPartnerships = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-launch-light via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-launch-purple/10 via-launch-orange/5 to-transparent" />
        
        <div className="relative w-full">
          {/* Main Hero Content */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 pt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              Reach Elite <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">AI Builders</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Connect with a highly engaged community of AI-first developers, founders, and innovators. Quality over quantity - targeted reach that converts.
            </p>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-launch-purple/10 hover:border-launch-purple/30 transition-all">
                <Users className="w-12 h-12 mx-auto mb-4 text-launch-orange" />
                <div className="text-4xl font-bold bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-2">200+</div>
                <div className="text-gray-600">Active AI Builders</div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-launch-purple/10 hover:border-launch-purple/30 transition-all">
                <Target className="w-12 h-12 mx-auto mb-4 text-launch-orange" />
                <div className="text-4xl font-bold bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-2">72%</div>
                <div className="text-gray-600">Daily Active Users</div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center border-2 border-launch-purple/10 hover:border-launch-purple/30 transition-all">
                <Zap className="w-12 h-12 mx-auto mb-4 text-launch-orange" />
                <div className="text-4xl font-bold bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-2">600+</div>
                <div className="text-gray-600">Newsletter Subscribers</div>
              </div>
            </div>

            {/* Banner Image */}
            <div className="mb-16">
              <img
                src="/lovable-uploads/banner-2-panel.png"
                alt="Launch by Lunch - The Inner Circle"
                className="w-full max-w-6xl mx-auto rounded-2xl shadow-xl border-[3mm] border-white"
              />
            </div>

            {/* Year-Long Partnerships Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="text-3xl mb-4">📦</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                    Year-Long Partnerships
                  </span>
                </h2>
                <p className="text-xl text-gray-600">Build Lasting Relationships</p>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                  Choose the partnership level that fits your goals. All packages focus on education + brand visibility, not just pitching to our community.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Connector Package */}
                <div className="relative bg-gradient-to-br from-white to-orange-50/30 rounded-2xl p-8 shadow-xl border-2 border-launch-purple/20 hover:shadow-2xl transition-all">
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-launch-purple to-launch-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Connector Package</h3>
                  <p className="text-gray-600 mb-6">Quarterly engagement with consistent visibility</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">$2500</span>
                    <span className="text-gray-600 ml-2">per year</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-launch-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-launch-purple"></div>
                      </div>
                      <span className="text-gray-700">Quarterly Demo/Q&A Sessions (4 per year)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-launch-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-launch-purple"></div>
                      </div>
                      <span className="text-gray-700">Newsletter Feature each Quarter (4 total)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-launch-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-launch-purple"></div>
                      </div>
                      <span className="text-gray-700">Listing on 'Community Tools We Use' page</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-launch-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-launch-purple"></div>
                      </div>
                      <span className="text-gray-700">1 company seat in LBL community for duration of partnership</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-launch-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-launch-purple"></div>
                      </div>
                      <span className="text-gray-700">Quarterly performance reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-launch-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-launch-purple"></div>
                      </div>
                      <span className="text-gray-700">Custom discount code for members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-launch-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-launch-purple"></div>
                      </div>
                      <span className="text-gray-700">Promoted as a LBL partner in all newsletters</span>
                    </li>
                  </ul>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white py-6 text-lg rounded-full font-semibold shadow-lg"
                    onClick={() => window.location.href = 'mailto:welcome@launchbylunch.co?subject=Connector Package Interest'}
                  >
                    Start Partnership
                  </Button>
                </div>

                {/* Embedded Package */}
                <div className="relative bg-gradient-to-br from-white to-purple-50/30 rounded-2xl p-8 shadow-xl border-2 border-launch-orange/20 hover:shadow-2xl transition-all">
                  <div className="absolute top-4 right-4 bg-gray-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Coming Soon
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Embedded Package</h3>
                  <p className="text-gray-600 mb-6">Everything in Connector plus hands-on workshops</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">$6900</span>
                    <span className="text-gray-600 ml-2">per year</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-launch-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-launch-orange"></div>
                      </div>
                      <span className="text-gray-700">Everything in Connector Package</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-launch-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-launch-orange"></div>
                      </div>
                      <span className="text-gray-700">Co-hosted Workshop (hands-on 60-90 min)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-launch-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-launch-orange"></div>
                      </div>
                      <span className="text-gray-700">Logo placement on event pages & resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-launch-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-launch-orange"></div>
                      </div>
                      <span className="text-gray-700">Custom discount code for members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-launch-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-launch-orange"></div>
                      </div>
                      <span className="text-gray-700">Priority scheduling for events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-launch-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-launch-orange"></div>
                      </div>
                      <span className="text-gray-700">Dedicated account manager</span>
                    </li>
                  </ul>
                  
                  <Button 
                    className="w-full bg-gray-400 text-white py-6 text-lg rounded-full font-semibold cursor-not-allowed"
                    disabled
                  >
                    Coming Soon
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Start Option */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="text-3xl mb-4">🎯</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                    Quick Start Option
                  </span>
                </h2>
                <p className="text-xl text-gray-600">Quick Intro</p>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                  Not ready for a full partnership? Start with our one-off demo session to see the engagement quality firsthand.
                </p>
              </div>

              <div className="max-w-2xl mx-auto bg-gradient-to-br from-white to-orange-50/30 rounded-2xl p-8 shadow-xl border-2 border-launch-purple/20">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Demo + Q&A Session</h3>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">$450</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-launch-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-launch-purple"></div>
                    </div>
                    <span className="text-gray-700">45-minute live demo + interactive Q&A</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-launch-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-launch-purple"></div>
                    </div>
                    <span className="text-gray-700">Event listing in community calendar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-launch-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-launch-purple"></div>
                    </div>
                    <span className="text-gray-700">Reminder post in our community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-launch-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-launch-purple"></div>
                    </div>
                    <span className="text-gray-700">Recording shared to members who couldn't attend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-launch-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-launch-purple"></div>
                    </div>
                    <span className="text-gray-700">3x feature in newsletter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-launch-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-launch-purple"></div>
                    </div>
                    <span className="text-gray-700">Targeted, engaged reach vs. raw numbers</span>
                  </li>
                </ul>
                
                <Button 
                  className="w-full bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white py-6 text-lg rounded-full font-semibold shadow-lg"
                  onClick={() => window.location.href = 'mailto:welcome@launchbylunch.co?subject=Demo Session Interest'}
                >
                  Sign Up
                </Button>
              </div>
            </div>

            {/* Why Partner Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                  Why Partner With LBL?
                </span>
              </h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                We're not just another email list. We're a curated community of builders who are actively creating the future of AI.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-launch-purple/20 to-launch-orange/20 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-launch-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Quality Over Quantity</h3>
                  <p className="text-gray-600">Highly engaged, niche AI-first builder group, not a random email list.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-launch-purple/20 to-launch-orange/20 flex items-center justify-center">
                    <ThumbsUp className="w-8 h-8 text-launch-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Education First</h3>
                  <p className="text-gray-600">Frame partnerships as helping members learn and grow, not just selling.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-launch-purple/20 to-launch-orange/20 flex items-center justify-center">
                    <Share2 className="w-8 h-8 text-launch-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Social Proof</h3>
                  <p className="text-gray-600">Showcase sponsors on website, LinkedIn, newsletter & in the community.</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center bg-gradient-to-br from-launch-purple/10 to-launch-orange/10 rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Still have questions?</h2>
              <p className="text-gray-600 mb-6">Schedule a call with us.</p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white px-8 py-6 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://calendly.com/d/cwr2-n7m-9gs/learn-more', '_blank')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CommunityPartnerships;
