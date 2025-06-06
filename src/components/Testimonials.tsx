
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rachael Lowell",
      title: "Founder of REworking Leadership",
      quote: "After just one session of Launch by Lunch, I built a tool that actually met my needs—and launched it with a client the next week. So grateful to Karen and Stephan for creating something so practical, focused, and empowering.",
      image: "/lovable-uploads/2e38fcee-1ac3-4e29-a97c-0e79da6962c6.png"
    },
    // Placeholders for the other two testimonials
    {
      name: "Coming Soon",
      title: "Founder",
      quote: "More testimonials coming soon...",
      image: "/placeholder.svg"
    },
    {
      name: "Coming Soon", 
      title: "Founder",
      quote: "More testimonials coming soon...",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-launch-orange/5 via-transparent to-launch-purple/5" />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
              What Our Community Says
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Real stories from founders who've transformed their ideas into reality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-launch-orange relative"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 left-4">
                <Quote className="h-6 w-6 text-launch-orange/30" />
              </div>
              
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-1 bg-gradient-to-r from-launch-purple via-launch-orange to-launch-purple mx-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Name and Title */}
              <div className="text-center">
                <h3 className="font-bold text-lg text-launch-purple mb-1">{testimonial.name}</h3>
                <p className="text-launch-orange font-medium text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
