import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    position: "Fullstack Web Developer",
    company: "PT KAS Autocare",
    period: "2025 - Present",
    type: "Freelance",
    description:
      "Developing and maintaining fullstack web applications with focus on modern architecture and user experience.",
    achievements: [
      "Contributed to AutoCare web application development using Agile/Scrum methodology",
      "Built a QR-based POS system for restaurant clients — scan QR, browse menu, and complete payment through web",
      "Developed fullstack applications using Spring Boot, MySQL, and deployed to Railway",
      "Managed digital marketing campaigns (Meta Ads & TikTok Ads) for multiple clients including barbershop, reflexology, and café",
    ],
  },
  {
    position: "Frontend Developer & Digital Marketing",
    company: "PT Hoky Mitra Sejati",
    period: "2023 - 2025",
    type: "Full-time",
    description: "Official Yamaha Motorcycle Dealer in Depok.",
    achievements: [
      "Built and maintained company website using React.js and later upgraded to Next.js with Sanity CMS",
      "Achieved #2 Google ranking for keyword 'Yamaha Depok' through SEO optimization",
      "Integrated chatbot, payment gateway, and dynamic content management",
      "Executed content strategy and social media campaigns that generated cross-border sales of 10+ units (nearly IDR 10 million in profit)",
      "Produced short-form videos and led live TikTok sessions to drive traffic and leads",
    ],
  },
];

export const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

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
          { opacity: 0, y: 50, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const timeline = timelineRef.current;
      const progress = progressRef.current;
      if (!timeline || !progress) return;

      const rect = timeline.getBoundingClientRect();
      const windowH = window.innerHeight;
      const total = rect.height;
      const visible = Math.min(windowH - rect.top, total);
      const pct = Math.max(0, Math.min(1, visible / total));

      progress.style.height = `${pct * 100}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="scroll-mt-24 mt-12 relative overflow-hidden rounded-4xl px-6 py-12 sm:px-10 sm:py-16"
      style={{
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.3)",
      }}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <p
        ref={badgeRef}
        className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase"
        style={{ opacity: 0 }}
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        Experience
      </p>

      <h2
        ref={headingRef}
        className="mb-12 text-3xl font-bold tracking-tight text-text sm:text-4xl"
        style={{ opacity: 0 }}
      >
        Professional <span className="text-primary">Experience</span>
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div
          ref={timelineRef}
          className="absolute left-0 top-0 bottom-0 w-px bg-white/10 ml-3 hidden sm:block"
        >
          {/* Progress fill */}
          <div
            ref={progressRef}
            className="w-full rounded-full"
            style={{
              height: "0%",
              background: "linear-gradient(180deg, #14b8a6, #56bdd4)",
              transition: "height 0.5s linear",
            }}
          />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative sm:pl-10"
              style={{ opacity: 0 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 hidden sm:flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <div className="h-2 w-2 rounded-full bg-primary group-hover:bg-white transition-colors duration-300" />
              </div>

              <div
                className="rounded-2xl border border-white/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-text">
                      {exp.position}
                    </h3>
                    <p className="text-primary font-medium text-sm mt-0.5">
                      {exp.company}
                      <span className="mx-2 text-text-muted">•</span>
                      <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {exp.type}
                      </span>
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-soft/50 px-3 py-1 text-xs font-medium text-text-muted whitespace-nowrap">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    {exp.period}
                  </div>
                </div>

                <p className="mt-3 text-sm text-text-muted">
                  {exp.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-sm text-text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
