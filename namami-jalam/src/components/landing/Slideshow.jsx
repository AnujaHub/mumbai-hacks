import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import one from "../../assets/photos/one.jpeg";
import two from "../../assets/photos/two.png";
import three from "../../assets/photos/three.png";

const Slideshow = () => {
  const imageRefs = [useRef(null), useRef(null), useRef(null)];
  const textRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const images = [one, two, three];
  const texts = [
    "The festival ends…",
    "But the waste stays…",
    "And the ocean suffers."
  ];

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });

    images.forEach((_, i) => {
      if (imageRefs[i].current && textRefs[i].current) {
        tl.to(imageRefs[i].current, { opacity: 1, duration: 1.5 })
          .to(textRefs[i].current, { opacity: 1, y: 0, duration: 1 }, "-=1");
      }
    });

    if (textRefs[3].current) {
      tl.to(textRefs[3].current, { opacity: 1, y: 0, duration: 1 }, "+=0.5")
        .to(".slideshow-container", { opacity: 0, duration: 1, ease: "power2.out" }, "+=2")
        .to(".slideshow-container", { display: "none", duration: 0 }, "-=0.5");
    }

    return () => tl.kill();
  }, []);

  return (
    <div className="slideshow-container relative w-full h-[75vh] md:h-[85vh] 
                    flex flex-col items-center justify-center 
                    overflow-hidden py-6 opacity-100 transition-opacity">

      {/* Cinematic Overlay */}
      <div
        aria-hidden
        // className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0 pointer-events-none"
        // style={{
        //   background:
        //     "linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.6))",
        // }}
      />

      {/* Background Images */}
      {images.map((src, i) => (
        <img
          key={i}
          ref={imageRefs[i]}
          src={src}
          alt={`slide ${i + 1}`}
          className="absolute w-7xl h-[80vh] object-cover opacity-0 filter brightness-55 contrast-125 saturate-150 hue-rotate-10 rounded-md shadow-lg shadow-black/30"
          style={{ imageRendering: "auto" }}
        />
      ))}

      {/* Text Content */}
      <div className="flex flex-col items-center space-y-4 text-center px-4 max-w-4xl z-10">

        {texts.map((t, i) => (
          <div
            key={i}
            ref={textRefs[i]}
            className="opacity-0 translate-y-2 relative px-8 py-5 rounded-xl shadow-xl"
            // style={{
              
            //   backdropFilter: "blur(6px)",
            // }}
          >
            <h2 className="text-white text-3xl md:text-5xl font-semibold tracking-wide drop-shadow-xl">
              {t}
            </h2>
          </div>
        ))}

      </div>
    </div>
  );
}; 

export default Slideshow;
