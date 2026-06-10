import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 3, suffix: "+", label: "Tech Stacks" },
];

const socials = [
  {
    icon: Github,
    href: "https://github.com/abdullahhusairin291",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/abdullah-husairin/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:husairin11@gmail.com",
    label: "Email",
  },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          let start = 0;
          const duration = 1500;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const parasRef = useRef<HTMLParagraphElement[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 85%",
          },
        },
      );

      // Heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        },
      );

      // Paragraphs stagger
      gsap.fromTo(
        parasRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: parasRef.current[0],
            start: "top 85%",
          },
        },
      );

      // Stats
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 88%",
          },
        },
      );

      // Socials
      gsap.fromTo(
        socialsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: socialsRef.current,
            start: "top 90%",
          },
        },
      );

      // Glow parallax
      gsap.to(glowRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="scroll-mt-24 mt-12 relative overflow-hidden rounded-4xl bg-bg-soft px-6 py-12 sm:px-10 sm:py-16"
    >
      {/* Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />

      {/* Badge */}
      <p
        ref={badgeRef}
        className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase"
        style={{ opacity: 0 }}
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        About Me
      </p>

      {/* Heading */}
      <h2
        ref={headingRef}
        className="mb-8 text-3xl font-bold tracking-tight text-text sm:text-4xl"
        style={{ opacity: 0 }}
      >
        Fullstack Developer &{" "}
        <span className="text-primary">Digital Marketing</span>
      </h2>

      {/* Stats */}
      <div
        ref={statsRef}
        className="mb-10 grid grid-cols-3 gap-4 sm:gap-6"
        style={{ opacity: 0 }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-border bg-bg px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <p className="text-2xl font-bold text-primary sm:text-3xl">
              <CountUp target={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-xs text-text-muted sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Paragraphs */}
      <div className="space-y-5 text-base leading-relaxed text-text-muted sm:text-lg">
        {[
          "I am a Semester 8 Computer Science student at Universitas Ibn Khaldun Bogor with over 2 years of hands-on experience as a Fullstack Web Developer.",
          "I specialize in building modern, high-performance web applications using React, Next.js, and Spring Boot. Experienced in developing complete solutions — from responsive frontends and RESTful APIs to backend systems and cloud deployments.",
          "In addition to development, I also have strong experience in Digital Marketing, including content strategy, short-form video production, Meta Ads (Instagram & Facebook), and TikTok Ads — helping businesses grow their online presence and generate sales.",
        ].map((text, i) => (
          <p
            key={i}
            ref={(el) => {
              if (el) parasRef.current[i] = el;
            }}
            style={{ opacity: 0 }}
          >
            {text}
          </p>
        ))}
      </div>

      {/* Socials */}
      <div
        ref={socialsRef}
        className="mt-10 flex items-center gap-3"
        style={{ opacity: 0 }}
      >
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border bg-bg text-text transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
          >
            <span className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <Icon
              size={18}
              className="relative z-10 transition-colors duration-300 group-hover:text-white"
            />
          </a>
        ))}

        <div className="ml-2 h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>
    </section>
  );
};
