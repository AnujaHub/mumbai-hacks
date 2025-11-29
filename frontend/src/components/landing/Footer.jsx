import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <footer ref={footerRef} className="py-12 text-white" style={{background: 'linear-gradient(90deg, var(--ocean-900), var(--ocean-700))'}}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-semibold">
          <p>&copy; {new Date().getFullYear()} Namami Jalam. All Rights Reserved.</p>
        </div>
        <div className="space-x-6">
          <a href="#" className="hover:text-blue-200">Privacy Policy</a>
          <a href="#" className="hover:text-blue-200">Terms of Service</a>
          <a href="#" className="hover:text-blue-200">About Us</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-200">Facebook</a>
          <a href="#" className="hover:text-blue-200">Twitter</a>
          <a href="#" className="hover:text-blue-200">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
