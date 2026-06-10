import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contacts = [
  {
    icon: Mail,
    label: "Send Email",
    href: "mailto:husairin11@gmail.com",
    primary: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdullah-husairin/",
    primary: false,
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/abdullahhusairin291",
    primary: false,
  },
  {
    icon: Phone,
    label: "+62 896-6739-0903",
    href: "tel:+6289667390903",
    primary: false,
  },
];

export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          buttonsRef.current?.children
            ? Array.from(buttonsRef.current.children)
            : [],
          { opacity: 0, y: 20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "back.out(1.4)",
          },
          "-=0.2",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="scroll-mt-24 mt-12 relative overflow-hidden rounded-4xl px-6 py-16 sm:px-10 sm:py-20"
      style={{
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.3)",
      }}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative text-center">
        <p
          ref={badgeRef}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase"
          style={{ opacity: 0 }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Get In Touch
        </p>

        <h2
          ref={headingRef}
          className="mb-6 text-3xl font-bold tracking-tight text-text sm:text-4xl"
          style={{ opacity: 0 }}
        >
          Let's Work <span className="text-primary">Together</span>
        </h2>

        <p
          ref={descRef}
          className="mx-auto mb-10 max-w-2xl text-base text-text-muted sm:text-lg"
          style={{ opacity: 0 }}
        >
          I'm currently open to new opportunities in Fullstack Development,
          Freelance projects, and Digital Marketing collaborations. Feel free to
          reach out if you have an exciting project or opportunity.
        </p>

        <div ref={buttonsRef} className="flex flex-wrap justify-center gap-3">
          {contacts.map(({ icon: Icon, label, href, primary }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                primary
                  ? "bg-primary text-white hover:bg-primary-hover hover:shadow-primary/30"
                  : "border border-white/20 text-text hover:border-primary/50 hover:text-primary hover:shadow-primary/10"
              }`}
              style={primary ? {} : { background: "rgba(255,255,255,0.08)" }}
            >
              <Icon
                size={16}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
