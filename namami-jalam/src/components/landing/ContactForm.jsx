import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ContactForm = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div id="contact" className="py-16" style={{background: 'linear-gradient(180deg, rgba(0,31,63,0.02), rgba(255,255,255,0.0))'}}>
      <h2 className="text-4xl font-bold text-center mb-8" style={{color: 'var(--ocean-900)'}}>Get in Touch</h2>
      <div
        ref={formRef}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Your Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-md border-2 border-blue-600 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email Address</label>
            <input
              type="email"
              className="w-full p-3 rounded-md border-2 border-blue-600 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              className="w-full p-3 rounded-md border-2 border-blue-600 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full" style={{background: 'linear-gradient(90deg,var(--ocean-700), var(--ocean-500))', color: 'white'}}
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-lg">Stay updated with Namami Jalam</p>
          <input
            type="email"
            className="p-3 rounded-md w-full mt-4 border-2 border-blue-600 text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your email address"
          />
          <button className="mt-4 p-3 rounded-md w-full" style={{background: 'linear-gradient(90deg,var(--ocean-700), var(--ocean-500))', color:'white'}}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
