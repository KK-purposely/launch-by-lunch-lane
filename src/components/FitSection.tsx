import { CheckCircle } from "lucide-react";

const FitSection = () => {
  const questions = [
    "Did you outsource your dev project and are disappointed in the results?",
    "Do you have an idea and want to build it yourself without code?",
    "Are you a fractional expert who works with early stage startups and wants to build your brand in a trusted network?",
    "Are you an AI expert who believes in a \"give first\" approach to building professional relationships?"
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 bg-gradient-to-r from-launch-purple to-launch-orange bg-clip-text text-transparent">
          Not Sure if You're a Good Fit?
        </h2>
        
        <div className="space-y-6 mb-8">
          {questions.map((question, index) => (
            <div key={index} className="flex items-start gap-4 text-left max-w-3xl mx-auto">
              <div className="flex-shrink-0 mt-1">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-launch-purple to-launch-orange text-white font-semibold text-sm">
                  {index + 1}
                </span>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                {question}
              </p>
            </div>
          ))}
        </div>
        
        <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-lg shadow-md border border-orange-100">
          <CheckCircle className="h-6 w-6 text-launch-orange" />
          <p className="text-lg font-semibold text-gray-800">
            If you answered yes to any of these, Launch by Lunch is the right place for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FitSection;