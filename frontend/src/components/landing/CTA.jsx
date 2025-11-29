import React, { useRef,useEffect } from "react";
import { gsap } from "gsap";

const CTA = () => {
  const ctaRef = useRef(null);
  const donateRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      donateRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="text-center py-16" >
      <h2 className="text-4xl font-bold mb-4">Take Action and Make a Difference</h2>
      <p className="text-xl mb-6 text-black/90">
        Join the Namami Jalam movement to help clean Mumbai's beaches. Every action counts!
      </p>
      <div className="space-x-6">
        <button
          ref={ctaRef}
          className="px-8 py-3 text-black font-semibold rounded-full btn-accent transition-var"
        >
          Volunteer Now
        </button>
        <button
          ref={donateRef}
          className="px-8 py-3 text-black font-semibold rounded-full btn-accent transition-var"
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default CTA;
