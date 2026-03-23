import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Karen Kelly",
    title: "Founder, CEO",
    image: "/lovable-uploads/karen-kelly.jpg",
    alt: "Karen Kelly, CEO of Launch by Lunch",
    bio: "Karen Kelly is a 3x founder and TEDx speaker helping leaders navigate the future of work in an AI-driven world. Named a Top 100 Innovator in 2026, Karen founded Launch by Lunch as Boston's first AI upskilling space with the goal of enabling non-technical teams with the power of no code solutions.",
    linkedIn: "https://www.linkedin.com/in/karen-kelly-daring-greatly/",
  },
  {
    name: "Ariel Galipeau",
    title: "Director of AI Programs",
    image: "/lovable-uploads/ariel-galipeau.jpg",
    alt: "Ariel Galipeau, Director of AI Programs at Launch by Lunch",
    bio: "Ariel Galipeau is an AI operations leader and coach who helps founders and teams turn ideas into executable plans, scalable systems, and consistent progress. With a decade inside fast-moving, mission-driven startups, she translates complexity into clear priorities and embeds AI into day-to-day workflows to improve decision-making.",
  },
];

const WhoWeAre = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-launch-purple mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A female-led team that's taught over 100 AI courses, written millions of lines of code, and built hundreds of automations, all using only natural language. We are AI strategists, developers, and coaches that won't let you fail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((person, i) => (
            <Card key={i} className="border-none shadow-lg bg-gradient-to-br from-white via-launch-light/20 to-white overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={person.image}
                    alt={person.alt}
                    className="w-32 h-32 rounded-full object-cover shadow-md mb-4"
                  />
                  <h3 className="text-xl font-bold mb-1">
                    {person.linkedIn ? (
                      <a
                        href={person.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                      >
                        {person.name}
                      </a>
                    ) : (
                      <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
                        {person.name}
                      </span>
                    )}
                  </h3>
                  <p className="text-launch-orange font-semibold mb-3">{person.title}</p>
                  <p className="text-gray-600 leading-relaxed text-base">{person.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
