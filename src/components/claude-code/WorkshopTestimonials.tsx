import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
}

const WorkshopTestimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  return (
    <div className="max-w-3xl mx-auto">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-10 border border-gray-100 shadow-sm text-center"
        >
          <Quote className="h-8 w-8 text-launch-orange/30 mx-auto mb-4" />
          <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
            "{t.quote}"
          </blockquote>
          <p className="font-bold text-launch-purple text-lg">— {t.name}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkshopTestimonials;
