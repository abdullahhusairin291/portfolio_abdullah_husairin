import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout, Server, Database, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    title: "Frontend",
    icon: Layout,
    color: "20,184,166",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend & Database",
    icon: Server,
    color: "99,102,241",
    skills: ["Java", "Spring Boot", "JPA", "RESTful API", "MySQL"],
  },
  {
    title: "Tools & Deployment",
    icon: Database,
    color: "56,189,248",
    skills: [
      "Git & GitHub",
      "Vercel",
      "Railway",
      "Sanity CMS",
      "DBeaver",
      "Payment Gateway",
    ],
  },
  {
    title: "Digital Marketing",
    icon: TrendingUp,
    color: "134,239,172",
    skills: [
      "Meta Ads (IG & FB)",
      "TikTok Ads",
      "Content Strategy",
      "Video Production",
      "SEO Optimization",
      "Performance Reporting",
    ],
  },
];

export const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: badgeRef.current, start: "top 85%" },
        },
      );

      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        },
      );

      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: "back.out(1.4)",
            scrollTrigger: { trigger: card, start: "top 90%" },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="scroll-mt-24 mt-12 relative overflow-hidden rounded-4xl px-6 py-14 sm:px-10 sm:py-20"
      style={{
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.3)",
      }}
    >
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />

      <p
        ref={badgeRef}
        className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase"
        style={{ opacity: 0 }}
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        Skills
      </p>

      <h2
        ref={headingRef}
        className="mb-14 text-3xl font-bold tracking-tight text-text sm:text-4xl"
        style={{ opacity: 0 }}
      >
        Technologies & <span className="text-primary">Expertise</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <div
              key={group.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/20 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
              style={{ background: "rgba(255,255,255,0.08)", opacity: 0 }}
            >
              {/* Glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, rgba(${group.color}, 0.12), transparent 70%)`,
                }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(${group.color}, 0.8), transparent)`,
                }}
              />

              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `rgba(${group.color}, 0.15)`,
                    color: `rgb(${group.color})`,
                  }}
                >
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-semibold text-text">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-text-muted transition-all duration-300 group-hover:border-primary/20 group-hover:text-primary group-hover:bg-primary/5"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
