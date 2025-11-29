import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const Process = () => {
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const [isStep1Visible, setIsStep1Visible] = useState(false);
  const [isStep2Visible, setIsStep2Visible] = useState(false);
  const [isStep3Visible, setIsStep3Visible] = useState(false);

  const triggerAnimation = (stepRef, setVisibility) => {
    if (stepRef.current) {
      gsap.fromTo(
        stepRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
      );
      setVisibility(true); // Mark this step as visible
    }
  };

  useEffect(() => {
    const options = {
      root: null, // observe visibility relative to the viewport
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === step1Ref.current && !isStep1Visible) {
            triggerAnimation(step1Ref, setIsStep1Visible);
          }
          if (entry.target === step2Ref.current && !isStep2Visible) {
            triggerAnimation(step2Ref, setIsStep2Visible);
          }
          if (entry.target === step3Ref.current && !isStep3Visible) {
            triggerAnimation(step3Ref, setIsStep3Visible);
          }
        }
      });
    }, options);

    // Start observing the steps
    observer.observe(step1Ref.current);
    observer.observe(step2Ref.current);
    observer.observe(step3Ref.current);

    // Clean up the observer on unmount
    return () => {
      observer.disconnect();
    };
  }, [isStep1Visible, isStep2Visible, isStep3Visible]);

  return (
    <div
      id="how-it-works" style={{ background: 'teal-50'}}
      className="max-w-screen mx-auto px-6 py-16 flex flex-col gap-16  bg-teal-50">
    
      <h3 className="text-3xl font-bold text-center text-[var(--ocean-700)] mb-8">
        The AI Journey: From Image to Action
      </h3>

      <div className="flex flex-col">
        <div className="flex flex-col items-center">
          <p
            ref={step1Ref}
            className="text-3xl leading-relaxed text-gray-700"
            style={{color: 'var(--ocean-700)'}}
          >
            <span className="font-semibold">Step 1:</span> Upload an image to get started.
          </p>
          <div className="w-0.5 h-11" style={{backgroundColor: 'var(--ocean-300)'}}></div>
        </div>

        <div className="flex flex-col items-center">
          <p
            ref={step2Ref}
            className="text-3xl leading-relaxed text-gray-700"
            style={{color: 'var(--ocean-700)'}}
          >
            <span className="font-semibold">Step 2:</span> Our AI tool processes and analyzes the data.
          </p>
          <div className="w-0.5 h-11" style={{backgroundColor: 'var(--ocean-300)'}}></div>
        </div>

        <div className="flex flex-col items-center">
          <p
            ref={step3Ref}
            className="text-3xl leading-relaxed text-gray-700"
            style={{color: 'var(--ocean-700)'}}
          >
            <span className="font-semibold">Step 3:</span> Receive insights and take actions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
