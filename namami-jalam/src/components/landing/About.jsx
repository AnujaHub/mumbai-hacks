import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const cardsRef = useRef([]);

    const addCardRef = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    // Animate cards on scroll into view
    React.useLayoutEffect(() => {
        const cards = cardsRef.current;
        cards.forEach((card, i) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                    },
                    delay: i * 0.2, // stagger animation
                }
            );
        });

        return () => {
            // Cleanup ScrollTrigger instances
            cards.forEach((card) => {
                if (card && card._gsap) {
                    gsap.set(card, { clearProps: "all" });
                }
            });
        };
    }, []);

    return (
        <section
            id="about-us"
            className="w-full py-20 px-4 md:px-10  text-black"
            aria-label="How Namami Jalam works"
        >
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
                <h3 className="text-4xl font-bold">How it works</h3>
                    <p className="max-w-3xl text-lg md:text-xl text-black">
                    Our platform empowers everyday citizens to act quickly. Capture a photo of a polluted site, the AI
                    analyzes it instantly, and alerts go where they’re needed - fast and simple.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full">
                    {/* Card 1 */}
                    <div
                        ref={addCardRef}
                        className="bg-white/5 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform duration-300 border-4 border-[var(--ocean-300)]"
                    >
                        <div className="text-2xl md:text-3xl font-bold" style={{backgroundColor: 'var(--ocean-300)', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 999}}>
                            1
                        </div>
                        <h4 className="text-xl md:text-2xl font-semibold mb-2">Spot the Issue</h4>
                        <p className="text-black/80">
                            See a polluted shoreline? Open the tool and get ready to report it.
                        </p>
                    </div>

                    {/* Card 2 */}
                        <div
                        ref={addCardRef}
                        className="bg-white/5 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform duration-300 border-4 border-[var(--ocean-300)]"
                    >
                        <div className="text-2xl md:text-3xl font-bold" style={{backgroundColor: 'var(--ocean-300)', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 999}}>
                            2
                        </div>
                        <h4 className="text-xl md:text-2xl font-semibold mb-2">Capture & Upload</h4>
                        <p className="text-black/80">
                            Snap a clear photo - the camera UI is quick and guides you for best results.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div
                        ref={addCardRef}
                        className="bg-white/5 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform duration-300 border-4 border-[var(--ocean-300)]"
                    >
                        <div className="text-2xl md:text-3xl font-bold" style={{backgroundColor: 'var(--ocean-300)', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 999}}>
                            3
                        </div>
                        <h4 className="text-xl md:text-2xl font-semibold mb-2">Instant Detection</h4>
                        <p className="text-black/80">
                            AI detects waste, calculates severity, and triggers alerts to clean-up teams.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About
