import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Layers, ChartBar } from "lucide-react";

const Services = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-launch-purple">Our Services</h1>
        
        {/* Other Packages */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-launch-purple mb-8">Our Packages</h2>
          
          {/* Momentum Builder */}
          <Card className="mb-12 border-2 border-gray-200 hover:border-launch-purple transition-all duration-300">
            <CardHeader className="bg-gray-50">
              <div className="flex items-center gap-3 mb-2">
                <Layers className="h-6 w-6 text-launch-orange" />
                <CardTitle className="text-2xl text-launch-purple">Momentum Builder</CardTitle>
              </div>
              <CardDescription className="text-xl font-medium">
                For Teams Ready to Turn Concepts Into Testable Products
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-700">Price:</p>
                  <p className="text-lg">$3,000 – $4,500</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Time:</p>
                  <p className="text-lg">10–15 hours</p>
                </div>
              </div>
              
              <div>
                <p className="font-semibold text-gray-700 mb-2">Includes:</p>
                <ul className="list-disc pl-5 space-y-2 text-lg">
                  <li>1:1 strategy + design sprint (CEO-led)</li>
                  <li>Technical stack matching & AI flow design (CTO-led)</li>
                  <li>Full build of interactive prototype, micro-app, or internal tool</li>
                  <li>Up to 2 feedback iterations</li>
                  <li>Demo day prep or investor-ready video walkthrough</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold text-gray-700 mb-2">Perfect For:</p>
                <p className="text-lg">No-code MVPs, internal automation tools, early pilots for pre-seed or pre-revenue startups.</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Launch Lab */}
          <Card className="mb-12 border-2 border-gray-200 hover:border-launch-purple transition-all duration-300">
            <CardHeader className="bg-gray-50">
              <div className="flex items-center gap-3 mb-2">
                <Layers className="h-6 w-6 text-launch-orange" />
                <CardTitle className="text-2xl text-launch-purple">Launch Lab</CardTitle>
              </div>
              <CardDescription className="text-xl font-medium">
                For Startups or Business Units Ready to Ship Something Live
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-700">Price:</p>
                  <p className="text-lg">$9,000 – $15,000</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Time:</p>
                  <p className="text-lg">30–50 hours</p>
                </div>
              </div>
              
              <div>
                <p className="font-semibold text-gray-700 mb-2">Includes:</p>
                <ul className="list-disc pl-5 space-y-2 text-lg">
                  <li>Full-service vibe coding studio: product strategy, UX wireframes, build, test</li>
                  <li>Real-time collaboration w/ CTO + CEO</li>
                  <li>Tooling setup: automation, API integrations, AI features (chatbots, workflows, etc.)</li>
                  <li>Implementation support up to soft launch</li>
                  <li>30-day check-in + optimization sprint</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold text-gray-700 mb-2">Perfect For:</p>
                <p className="text-lg">Teams without devs, marketing departments with an idea, or solo founders ready to go live without engineering.</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Enterprise Innovation Sprint */}
          <Card className="border-2 border-gray-200 hover:border-launch-purple transition-all duration-300">
            <CardHeader className="bg-gray-50">
              <div className="flex items-center gap-3 mb-2">
                <ChartBar className="h-6 w-6 text-launch-orange" />
                <CardTitle className="text-2xl text-launch-purple">Enterprise Innovation Sprint</CardTitle>
              </div>
              <CardDescription className="text-xl font-medium">
                AI-Powered Product Development for Enterprises, Orgs, & Agencies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-700">Price:</p>
                  <p className="text-lg">Custom ($25,000+)</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Time:</p>
                  <p className="text-lg">60–100+ hours</p>
                </div>
              </div>
              
              <div>
                <p className="font-semibold text-gray-700 mb-2">Includes:</p>
                <ul className="list-disc pl-5 space-y-2 text-lg">
                  <li>Dedicated CTO + CEO pair as fractional product + technical leads</li>
                  <li>Internal innovation sprint: from whiteboard to launch</li>
                  <li>Live working sessions with your team</li>
                  <li>Custom integrations into enterprise systems (Salesforce, Airtable, internal APIs, etc.)</li>
                  <li>Optional: staff training, AI literacy bootcamp, async support library</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold text-gray-700 mb-2">Perfect For:</p>
                <p className="text-lg">Innovation teams, digital transformation units, enterprise departments testing new service lines or tools.</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Services;
