import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Can I sponsor Launch by Lunch?",
      answer: (
        <>
          Yes, we're currently evaluating 2026 sponsorships. Read more{" "}
          <a 
            href="https://sponsorship.launchbylunch.co/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-launch-orange font-medium hover:underline"
          >
            here
          </a>
          .
        </>
      )
    },
    {
      question: "What is Launch by Lunch and who is it for?",
      answer: "Launch by Lunch is a community and accelerator program designed for AI-first founders and fractionals who want to build and scale their businesses without extensive coding knowledge. It's perfect for entrepreneurs who have great ideas but need guidance on turning them into working applications using AI and no-code tools."
    },
    {
      question: "How is Launch by Lunch different from other networking platforms?",
      answer: "Unlike traditional networking platforms, Launch by Lunch focuses specifically on AI-first startups and provides hands-on accelerator programs, direct access to investors, and practical tools to build working prototypes. We combine community networking with actionable learning experiences."
    },
    {
      question: "Can I join if I'm still in the idea stage and haven't launched yet?",
      answer: "Absolutely! Launch by Lunch is designed for founders at all stages, especially those in the early idea phase. Our accelerator programs are specifically designed to help you go from concept to working prototype in just 4 weeks."
    },
    {
      question: "What types of events do you host?",
      answer: "We host investor fireside chats, AI accelerator programs, office hours sessions, local AI meetups, and exclusive networking events. All events are designed to provide practical value and genuine connections for AI-first founders."
    },
    {
      question: "How can I connect with other founders in my specific industry?",
      answer: "Our community platform allows you to filter and connect with founders based on industry, stage, and interests. We also facilitate targeted networking during our events and through our member directory."
    },
    {
      question: "How does Launch by Lunch support fundraising efforts?",
      answer: "We provide access to investor networks through our fireside chats, offer pitch feedback sessions, and connect you with fractional experts who can help refine your fundraising strategy. Our community includes successful founders who can share their fundraising experiences."
    },
    {
      question: "Can I cancel my membership if it's not the right fit?",
      answer: "Yes, you can cancel your membership at any time. We want to ensure Launch by Lunch is the right fit for your journey, and we're confident in the value we provide to AI-first founders."
    },
    {
      question: "Can I upgrade to an annual membership after joining?",
      answer: "Absolutely! You can upgrade to an annual membership at any time and get 2 months free."
    }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 bg-gradient-to-br from-orange-50 to-launch-light">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left side - Title and description */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold text-launch-purple mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              If you have any further questions, please email us at{" "}
              <a 
                href="mailto:welcome@launchbylunch.co"
                className="text-launch-orange font-medium hover:underline"
              >
                welcome@launchbylunch.co
              </a>
              .
            </p>
          </div>

          {/* Right side - FAQ Accordion */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 transition-colors">
                    <span className="text-launch-purple font-semibold text-lg pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <div className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
