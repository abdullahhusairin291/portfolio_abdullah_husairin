import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

  const name = "Abdullah Husairin";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Letters drop in one by one
      tl.fromTo(
        lettersRef.current,
        { y: -60, opacity: 0, rotateX: 90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.05,
          stagger: 0.045,
          ease: "back.out(1.7)",
        },
      )

        // Subtitle fade in
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.2",
        )

        // Progress bar fill
        .fromTo(
          progressRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1.2, ease: "power2.inOut" },
          "+=0.1",
        )

        // Fade out whole splash
        .to(
          containerRef.current,
          {
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: () => {
              setShow(false);
              onComplete();
            },
          },
          "+=0.2",
        );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (!show) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f172a]"
    >
      {/* Glow background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-[100px]" />

      <div className="relative flex flex-col items-center gap-4">
        {/* Name */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white perspective-[800px]">
          {name.split("").map((char, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el) lettersRef.current[i] = el;
              }}
              className={`inline-block ${char === " " ? "w-4" : ""}`}
              style={{ opacity: 0 }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-sm sm:text-base text-teal-400 font-medium tracking-widest uppercase"
          style={{ opacity: 0 }}
        >
          Fullstack Developer & Digital Marketing
        </p>

        {/* Progress bar */}
        <div
          ref={barRef}
          className="mt-8 h-[2px] w-48 sm:w-64 rounded-full bg-white/10 overflow-hidden"
        >
          <div
            ref={progressRef}
            className="h-full w-full rounded-full bg-teal-400"
            style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
          />
        </div>
      </div>
    </div>
  );
};
