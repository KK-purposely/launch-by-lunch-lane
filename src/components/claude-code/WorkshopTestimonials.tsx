import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
}

const WorkshopTestimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-${testimonials.length} gap-6 max-w-5xl mx-auto">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-sm"
        >
          <Quote className="h-5 w-5 text-launch-orange/30 absolute top-4 left-4" />
          <blockquote className="text-gray-700 italic leading-relaxed mt-4 mb-4">
            "{t.quote}"
          </blockquote>
          <p className="font-bold text-launch-purple text-sm">— {t.name}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkshopTestimonials;
