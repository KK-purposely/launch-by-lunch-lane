
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const Accelerators = () => {
  const cohorts = [
    {
      id: 3,
      name: "Cohort #3",
      url: "https://lu.ma/882gea4s",
      status: "Currently Accepting Applications",
      isActive: true
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
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center text-launch-purple">Accelerators</h1>
        <p className="text-xl text-center text-gray-700 mb-12">If code and cost stands between you and your vision, this accelerator is for you.</p>
        
        <div className="space-y-8">
          {cohorts.map((cohort) => (
            <Card 
              key={cohort.id}
              className={`border-2 ${cohort.isActive ? 'border-launch-orange' : 'border-gray-200'} hover:shadow-md transition-all duration-300`}
            >
              <CardHeader className={`${cohort.isActive ? 'bg-launch-orange/10' : 'bg-gray-50'}`}>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl text-launch-purple">{cohort.name}</CardTitle>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${cohort.isActive ? 'bg-launch-orange/20 text-launch-orange' : 'bg-gray-200 text-gray-700'}`}>
                    {cohort.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex justify-between items-center">
                  <CardDescription className="text-lg">
                    {cohort.isActive ? 'Join our latest accelerator program' : 'Previous accelerator program'}
                  </CardDescription>
                  <Button
                    variant={cohort.isActive ? "default" : "outline"}
                    className={cohort.isActive ? "bg-launch-orange hover:bg-launch-orange/90" : ""}
                    onClick={() => window.open(cohort.url, '_blank')}
                    disabled={!cohort.isActive}
                  >
                    {cohort.isActive ? (
                      <>
                        Apply Now
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </>
                    ) : (
                      "Closed"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accelerators;
