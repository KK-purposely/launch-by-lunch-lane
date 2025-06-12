
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookOpen } from "lucide-react";

const MemberResourcesCard = () => {
  const resources = [
    {
      title: "No Code Glossary",
      description: "A comprehensive guide to no-code terminology and concepts",
      url: "https://glossary.launchbylunch.co/"
    },
    {
      title: "Memory Guide for Founders",
      description: "Essential memory techniques and strategies for startup founders",
      url: "https://memory.launchbylunch.co/"
    },
    {
      title: "Using Supabase",
      description: "Learn how to build powerful backend features with Supabase",
      url: "https://supabase.launchbylunch.co/"
    },
    {
      title: "Front End vs. Back End",
      description: "Understanding the difference between frontend and backend development",
      url: "https://frontend.launchbylunch.co/"
    },
    {
      title: "Sending emails through Vibe Coded apps",
      description: "Learn how to integrate email functionality into your no-code applications",
      url: "https://resend.launchbylunch.co/"
    }
  ];

  return (
    <Card className="shadow-lg border-launch-purple/10">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-launch-light p-2 rounded-lg">
            <BookOpen className="w-6 h-6 text-launch-purple" />
          </div>
          <CardTitle className="text-launch-purple">Member Resources</CardTitle>
        </div>
        <CardDescription>
          Helpful resources for your no-code journey
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {resources.map((resource, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-launch-purple/30 transition-colors">
              <a 
                href={resource.url} 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center justify-between group"
              >
                <div>
                  <h3 className="font-medium text-launch-purple group-hover:text-launch-purple/80 mb-1">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {resource.description}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-launch-purple" />
              </a>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MemberResourcesCard;
