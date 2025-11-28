import React, { useState } from "react";
import { gsap } from "gsap";

const FAQSection = () => {
 const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-16" style={{background: 'linear-gradient(180deg, rgba(0,31,63,0.03), rgba(0,31,63,0.01))'}}>
      <h2 className="text-3xl font-bold text-center mb-8" style={{color: 'var(--ocean-900)'}}>Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="mb-4"
            onClick={() => toggleFAQ(index)}
          >
            <div className="cursor-pointer flex justify-between items-center p-4 bg-white/60 shadow-md rounded-md hover:bg-white/70 transition" style={{border: '1px solid rgba(0,0,0,0.04)'}}>
              <h3 className="text-lg font-semibold" style={{color: 'var(--ocean-900)'}}>{faq.question}</h3>
              <span style={{color: 'var(--ocean-500)'}}>{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div
                className="p-4 bg-blue-50 overflow-hidden"
                ref={(el) => {
                  if (el) {
                    // Get the natural height of the content
                    const contentHeight = el.scrollHeight;
                    gsap.fromTo(
                      el,
                      { height: 0, opacity: 0 },
                      { height: contentHeight, opacity: 1, duration: 0.4, ease: "power2.out" }
                    );
                  }
                }}
              >
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "How can I get involved?",
    answer: "You can sign up on our platform and join a local cleanup event to help remove the waste from Mumbai's beaches.",
  },
  {
    question: "Are there any fees to participate?",
    answer: "No, it's free to volunteer. Just bring your energy and enthusiasm to help us clean up the beaches.",
  },
  {
    question: "When do the cleanups happen?",
    answer: "Cleanups typically take place after festivals like Ganesh Chaturthi. Keep an eye on our schedule for upcoming events.",
  },
];

export default FAQSection;
