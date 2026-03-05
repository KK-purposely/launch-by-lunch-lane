const integrations = [
  { name: "Gmail", logo: "/logos/gmail.svg" },
  { name: "Google Calendar", logo: "/logos/google-calendar.svg" },
  { name: "Google Drive", logo: "/logos/google-drive.svg" },
  { name: "Slack", logo: "/logos/slack.svg" },
  { name: "Notion", logo: "/logos/notion.svg" },
  { name: "Zoom", logo: "/logos/zoom.svg" },
  { name: "HubSpot", logo: "/logos/hubspot.svg" },
  { name: "Airtable", logo: "/logos/airtable.svg" },
  { name: "Trello", logo: "/logos/trello.svg" },
  { name: "Zapier", logo: "/logos/zapier.svg" },
  { name: "Asana", logo: "/logos/asana.svg" },
  { name: "Fathom", logo: "/logos/fathom.png" },
];

const IntegrationsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">
          Connect the Tools You Already Use
        </h2>
        <p className="text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
          Your Chief of Staff pulls from the apps running your business — so nothing falls through the cracks.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 flex items-center justify-center">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-sm text-gray-500 font-medium group-hover:text-launch-purple transition-colors duration-300">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
