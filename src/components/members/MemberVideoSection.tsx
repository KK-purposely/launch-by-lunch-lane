import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Play } from "lucide-react";

const MemberVideoSection = () => {
  const videos = [
    {
      id: 1,
      title: "Supabase: Connecting to a Project",
      description: "Learn how to connect your application to a Supabase project",
      duration: "12:34",
      thumbnail: "https://cdn.loom.com/sessions/thumbnails/b6e57b8da66a47ae9e28b6f3cb8c64b4-1731439200000-with-play.gif",
      url: "https://www.loom.com/share/b6e57b8da66a47ae9e28b6f3cb8c64b4"
    },
    {
      id: 2,
      title: "Building Your First App",
      description: "Step-by-step tutorial for creating your first application",
      duration: "18:45",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Advanced Techniques",
      description: "Pro tips and advanced strategies for experienced builders",
      duration: "24:12",
      thumbnail: "/placeholder.svg"
    }
  ];

  const handleVideoClick = (video: typeof videos[0]) => {
    if (video.url) {
      window.open(video.url, '_blank');
    }
  };

  return (
    <Card className="shadow-lg border-launch-purple/10">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-launch-light p-2 rounded-lg">
            <Video className="w-6 h-6 text-launch-purple" />
          </div>
          <CardTitle className="text-launch-purple">Exclusive Video Content</CardTitle>
        </div>
        <CardDescription>
          Access our premium video library with tutorials and insights
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="group cursor-pointer"
              onClick={() => handleVideoClick(video)}
            >
              <div className="relative mb-3 rounded-lg overflow-hidden bg-gray-100">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-launch-purple" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <h3 className="font-medium text-launch-purple group-hover:text-launch-purple/80 mb-1">
                {video.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {video.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MemberVideoSection;
