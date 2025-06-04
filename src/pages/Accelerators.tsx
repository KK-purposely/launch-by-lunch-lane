
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Rocket, CheckCircle } from "lucide-react";

const Accelerators = () => {
  const cohorts = [
    {
      id: 4,
      name: "Cohort #4 (June 2025)",
      url: "https://lu.ma/ns8lakdh",
      status: "Currently Accepting Applications",
      isActive: true
    },
    {
      id: 3,
      name: "Cohort #3 (June 2025)",
      url: "https://lu.ma/882gea4s",
      status: "SOLD OUT",
      isActive: false
    },
    {
      id: 2,
      name: "Cohort #2 (May 2025)",
      url: "https://lu.ma/7jv9c0eb",
      status: "SOLD OUT",
      isActive: false
    },
    {
      id: 1,
      name: "Cohort #1 (April 2025)",
      url: "https://lu.ma/640oqgpw",
      status: "SOLD OUT",
      isActive: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-launch-light via-white to-orange-50">
      {/* Hero Section with Gradient */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-launch-purple/10 via-transparent to-launch-orange/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent mb-4">
              <Sparkles className="h-6 w-6 text-launch-orange animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wide">Launch by Lunch Accelerators</span>
              <Sparkles className="h-6 w-6 text-launch-purple animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-launch-purple via-launch-orange to-launch-purple bg-clip-text text-transparent">
                Vibe Code Your Vision
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
              If code and cost stands between you and your vision, this accelerator is for you. 
              <span className="text-launch-orange font-semibold"> Learn how to vibe code a working prototype in just an hour or two.</span>
            </p>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4 max-w-2xl mx-auto">
              <p className="text-lg font-medium text-red-700 flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Our accelerators typically sell out in less than a week, so we encourage you to apply early.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cohorts Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-8">
        <div className="space-y-8">
          {cohorts.map((cohort, index) => (
            <Card 
              key={cohort.id}
              className={`group relative border-2 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
                cohort.isActive 
                  ? 'border-gradient-to-r from-launch-purple to-launch-orange shadow-xl bg-gradient-to-br from-white via-launch-light to-white' 
                  : 'border-gray-200 hover:border-launch-orange bg-white/60 backdrop-blur-sm'
              }`}
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {cohort.isActive && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-launch-purple to-launch-orange text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    🚀 Apply Now
                  </div>
                </div>
              )}
              
              <CardHeader className={`${cohort.isActive ? 'bg-gradient-to-r from-launch-purple/5 to-launch-orange/5' : 'bg-gray-50/80'} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <Rocket className="w-full h-full text-launch-orange" />
                </div>
                <div className="relative z-10">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-full ${cohort.isActive ? 'bg-gradient-to-r from-launch-purple to-launch-orange' : 'bg-gray-400'} shadow-lg`}>
                        <Rocket className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className={`text-2xl md:text-3xl ${cohort.isActive ? 'bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent' : 'text-gray-600'}`}>
                        {cohort.name}
                      </CardTitle>
                    </div>
                    <span className={`text-sm font-bold px-4 py-2 rounded-full shadow-sm ${
                      cohort.isActive 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {cohort.status}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <CardDescription className={`text-lg md:text-xl ${cohort.isActive ? 'text-gray-700' : 'text-gray-500'}`}>
                      {cohort.isActive ? 'Join our latest accelerator program and transform your idea into reality' : 'Previous accelerator program - Check back for future cohorts'}
                    </CardDescription>
                    {cohort.isActive && (
                      <div className="flex flex-wrap gap-3 mt-4">
                        <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                          <span className="text-sm text-blue-600 font-medium">4 Virtual Sessions</span>
                        </div>
                        <div className="flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full">
                          <span className="text-sm text-purple-600 font-medium">Small Group Learning</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                          <span className="text-sm text-green-600 font-medium">Working Prototype</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <Button
                    variant={cohort.isActive ? "default" : "outline"}
                    className={`group text-lg py-6 px-8 transition-all duration-300 ${
                      cohort.isActive 
                        ? 'bg-gradient-to-r from-launch-purple to-launch-orange hover:from-launch-orange hover:to-launch-purple text-white shadow-lg hover:shadow-xl' 
                        : 'text-gray-500'
                    }`}
                    onClick={() => window.open(cohort.url, '_blank')}
                    disabled={!cohort.isActive}
                  >
                    {cohort.isActive ? (
                      <span className="flex items-center gap-2">
                        Apply Now
                        <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    ) : (
                      "Closed"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-launch-purple/10 via-launch-orange/10 to-launch-purple/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                Ready to Build Your Vision?
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Join the next cohort and learn how to turn your ideas into working prototypes using the power of vibe coding.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Only 4 hours total commitment
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Expert guidance included
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Working prototype guaranteed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accelerators;
