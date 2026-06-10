import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AutoCare Web Application",
    description:
      "Contributed to the development of a fullstack web application for vehicle care business using Agile/Scrum methodology. Implemented CRUD operations and responsive frontend interfaces.",
    image: "/images/projects/autocare.png",
    tech: ["Next.js", "TypeScript", "Spring Boot", "MySQL", "REST API"],
    liveUrl: "https://autocare.kasprima.co.id/",
  },
  {
    title: "QR-Based POS System",
    description:
      "Built a modern QR-based Point of Sale system for a restaurant. Customers can scan QR code, browse menu, and complete payment directly through the web application.",
    image: "/images/projects/booking.png",
    tech: ["React", "Spring Boot", "MySQL", "Payment Gateway"],
    liveUrl: "https://beranda-kahyangan.kasprima.co.id/",
  },
  {
    title: "Yamaha Dealer Website",
    description:
      "Developed and maintained the official website for Yamaha motorcycle dealer. Upgraded from React to Next.js with Sanity CMS, achieved #2 Google ranking for 'Yamaha Depok'.",
    image: "/images/projects/yamaha.png",
    tech: ["Next.js", "Sanity CMS", "React Helmet", "SEO", "Payment Gateway"],
    liveUrl: "https://store.yamahahoky.com/",
  },
  {
    title: "Village Information System",
    description:
      "Built a dynamic village profile website with content management system, allowing easy information publishing and public data transparency.",
    image: "/images/projects/desa.png",
    tech: ["React.js", "Tailwind CSS", "Sanity CMS"],
    liveUrl: "https://kelurahan-lawanggintung.vercel.app/",
  },
  {
    title: "Wedding Invitation Website",
    description:
      "Elegant and responsive digital wedding invitation with beautiful animations and user-friendly interface.",
    image: "/images/projects/wedding.png",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://wedding-phi-murex.vercel.app/",
  },
];

export const ProjectsSection = () => {
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
      id="proyek"
      className="scroll-mt-24 mt-12 relative overflow-hidden rounded-4xl px-6 py-12 sm:px-10 sm:py-16"
      style={{
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.3)",
      }}
    >
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <p
        ref={badgeRef}
        className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase"
        style={{ opacity: 0 }}
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        Featured Projects
      </p>

      <h2
        ref={headingRef}
        className="mb-10 text-3xl font-bold tracking-tight text-text sm:text-4xl"
        style={{ opacity: 0 }}
      >
        Selected Projects <span className="text-primary">I've Worked On</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={project.title}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/20 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
            style={{ background: "rgba(255,255,255,0.08)", opacity: 0 }}
          >
            {/* Image */}
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Visit button on hover */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white"
              >
                <ExternalLink size={12} />
                Visit
              </a>
            </div>

            <div className="p-5">
              <h3 className="mb-2 text-base font-semibold text-text">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-text-muted leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs font-medium text-text-muted transition-all duration-300 group-hover:border-primary/20 group-hover:text-primary group-hover:bg-primary/5"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
