
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-launch-purple">About Us</h1>
        
        <Card className="mb-12 border-none shadow-md">
          <CardContent className="pt-6">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Launch by Lunch is the first virtual AI accelerator created to empower non-technical founders to move from the back of the crowd to the front of the line. Paired with strategic consulting services and an online community, startups go from prototype to revenue to scale - all without outsourcing a line of code.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Created by Boston-based CTO <a href="https://www.linkedin.com/in/stephansmithbc93/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">Stephan Smith</a> and 3x non-technical founder <a href="https://www.linkedin.com/in/karen-kelly-daring-greatly/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">Karen Kelly</a>, our vibe coding services shepherd you through the delightful process of using natural language to build technical products.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              If code and cost has always stood between you and your vision, come talk to us.
            </p>
          </CardContent>
        </Card>
        
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-launch-orange hover:bg-launch-orange/90 text-white rounded-full font-medium px-8 py-6 transition-all duration-300"
            onClick={() => window.open('https://learn.launchbylunch.co/forms/3d943f05-e3f5-4b13-a8e5-430b350bcf80', '_blank')}
          >
            <span className="mr-2">Talk to Us</span>
            <ArrowUpRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
