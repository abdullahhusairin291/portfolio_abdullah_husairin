import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const platformColors: Record<string, string> = {
  Instagram: "236,72,153",
  YouTube: "239,68,68",
  TikTok: "45,212,191",
};

const campaigns = [
  {
    title: "Relax Q",
    platform: "Instagram",
    role: "Content Planning & Video Production",
    description:
      "Planned content, produced short-form videos, and delivered weekly performance reports for a reflexology business.",
    image: "/images/marketing/relax.PNG",
    focus: ["Content Planning", "Video Production", "Weekly Reporting"],
    // Isi kalau ada angka nyata, contoh: { label: "Followers", value: "+0" }
    results: [] as { label: string; value: string }[],
    url: "https://www.instagram.com/relaxqserpong",
  },
  {
    title: "Altop Barber",
    platform: "Instagram",
    role: "Content Planning & Video Production",
    description:
      "Handled content planning, video production, and weekly reporting for a barbershop client alongside its website.",
    image: "/images/marketing/altop.PNG",
    focus: ["Content Planning", "Video Production", "Weekly Reporting"],
    results: [] as { label: string; value: string }[],
    url: "https://www.instagram.com/altopbarber",
  },
  {
    title: "Yamaha Hoky Motor",
    platform: "TikTok",
    role: "Social Media & Live Selling",
    description:
      "Planned and executed social media content, produced short-form videos, and led TikTok live sessions to drive local traffic and leads in the Jabodetabek area.",
    image: "/images/marketing/hoky.PNG",
    focus: ["Short-form Video", "TikTok Live", "Lead Generation"],
    results: [] as { label: string; value: string }[],
    url: "https://www.instagram.com/gayatri.putrifood",
  },
  {
    title: "Jamu Gendong Putri",
    platform: "Instagram",
    role: "Content & Creative Officer",
    description:
      "Managed Instagram content and sales strategy for the Jamu Gendong Putri brand.",
    image: "/images/marketing/jamu.PNG",
    focus: ["Content Planning", "Campaign Management", "Design & Creative"],
    results: [] as { label: string; value: string }[],
    url: "https://www.tiktok.com/@hoky.motor",
  },
];

export const MarketingSection = () => {
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
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.08,
            ease: "power3.out",
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
      id="marketing"
      className="scroll-mt-24 mt-12 relative overflow-hidden rounded-4xl px-6 py-12 sm:px-10 sm:py-16"
      style={{
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.3)",
      }}
    >
      <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <p
        ref={badgeRef}
        className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase"
        style={{ opacity: 0 }}
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        Digital Marketing
      </p>

      <h2
        ref={headingRef}
        className="mb-10 text-3xl font-bold tracking-tight text-text sm:text-4xl"
        style={{ opacity: 0 }}
      >
        Social Media <span className="text-primary">I've Managed</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {campaigns.map((item, index) => {
          const color = platformColors[item.platform] ?? "20,184,166";

          return (
            <div
              key={item.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/20 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
              style={{ background: "rgba(255,255,255,0.08)", opacity: 0 }}
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                {/* Platform badge selalu tampil */}
                <span
                  className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{ background: `rgba(${color},0.85)` }}
                >
                  {item.platform}
                </span>
              </div>

              <div className="p-5">
                <p className="mb-1 text-xs font-semibold tracking-wide text-primary uppercase">
                  {item.role}
                </p>
                <h3 className="mb-2 text-base font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>

                {item.results.length > 0 && (
                  <div className="mb-4 grid grid-cols-3 gap-2">
                    {item.results.map((result) => (
                      <div
                        key={result.label}
                        className="rounded-xl border border-white/10 px-3 py-2 text-center"
                        style={{ background: "rgba(255,255,255,0.05)" }}
                      >
                        <p className="text-base font-bold text-primary">
                          {result.value}
                        </p>
                        <p className="text-[11px] text-text-muted">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {item.focus.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs font-medium text-text-muted transition-all duration-300 group-hover:border-primary/20 group-hover:text-primary group-hover:bg-primary/5"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-opacity hover:opacity-80"
                  >
                    <ExternalLink size={12} />
                    View on {item.platform}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
