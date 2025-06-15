import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Play } from "lucide-react";

const MemberVideoSection = () => {
  const videos = [
    {
      id: 1,
      title: "Connecting Github #1: How to Save your code outside Lovable",
      description: "Connecting Github: How to take your code outside Lovable",
      duration: "3:25",
      thumbnail: "/lovable-uploads/89396bc0-f979-49d2-afe9-7185b1acb510.png",
      embedCode: '<div style="position: relative; padding-bottom: 60.810810810810814%; height: 0;"><iframe src="https://www.loom.com/embed/b82f83ce094741b38af6911831853513?sid=fe9476db-9b23-4396-81cf-8bcfd46239f8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>'
    },
    {
      id: 2,
      title: "Connecting Github #2: Navigating your code in Lovable & Github",
      description: "Learn how to navigate and manage your code between Lovable and Github",
      duration: "2:44",
      thumbnail: "/lovable-uploads/89396bc0-f979-49d2-afe9-7185b1acb510.png",
      embedCode: '<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/81b04467343a488e8a19021197251b90?sid=4439fe8b-325d-4fc3-a703-a56413b85bc4" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>'
    },
    {
      id: 3,
      title: "Connecting Github #3: Making changes directly in the code",
      description: "Learn how to make changes directly in your code while connected to Github",
      duration: "3:31",
      thumbnail: "/lovable-uploads/89396bc0-f979-49d2-afe9-7185b1acb510.png",
      embedCode: '<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/c72ec25d7c1b44699d01ccf4ea0cd2b5?sid=45652cc8-d920-4455-87af-35f271a41e6b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>'
    },
    {
      id: 4,
      title: "Supabase: Connecting to a Project",
      description: "Learn how to connect your application to a Supabase project",
      duration: "3:21",
      thumbnail: "/lovable-uploads/4028299c-66f3-4dd7-ac24-fc358b6f47c1.png",
      embedCode: '<div style="position: relative; padding-bottom: 60.810810810810814%; height: 0;"><iframe src="https://www.loom.com/embed/b82f83ce094741b38af6911831853513?sid=fe9476db-9b23-4396-81cf-8bcfd46239f8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>'
    },
    {
      id: 5,
      title: "Supabase #2: Saving data to tables",
      description: "Learn how to save and manage data in Supabase tables",
      duration: "2:48",
      thumbnail: "/lovable-uploads/97021a1a-bbc5-4c1b-b009-17d3ff56fbe1.png",
      embedCode: '<div style="position: relative; padding-bottom: 60.810810810810814%; height: 0;"><iframe src="https://www.loom.com/embed/b6e57b8da66a47ae9e28b6f3cb8c64b4?sid=441624f0-e29d-4186-bf16-38536bceab3d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>'
    },
    {
      id: 6,
      title: "Supabase #3: Send an Email with new Contact Submission",
      description: "Learn how to send automated emails when new contacts submit forms",
      duration: "24:12",
      thumbnail: "/lovable-uploads/97021a1a-bbc5-4c1b-b009-17d3ff56fbe1.png",
      embedCode: '<div style="position: relative; padding-bottom: 60.810810810810814%; height: 0;"><iframe src="https://www.loom.com/embed/b82f83ce094741b38af6911831853513?sid=56082dde-9db8-47c0-8f99-3b447e185ecd" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>'
    }
  ];

  const handleVideoClick = (video: typeof videos[0]) => {
    if (video.embedCode) {
      // Create a modal or new window to display the embedded video
      const newWindow = window.open('', '_blank', 'width=800,height=600');
      if (newWindow) {
        newWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>${video.title}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                .video-container { max-width: 800px; margin: 0 auto; }
                h1 { color: #2A1747; margin-bottom: 20px; }
              </style>
            </head>
            <body>
              <div class="video-container">
                <h1>${video.title}</h1>
                ${video.embedCode}
              </div>
            </body>
          </html>
        `);
        newWindow.document.close();
      }
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
                  className="w-full h-48 object-cover"
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
