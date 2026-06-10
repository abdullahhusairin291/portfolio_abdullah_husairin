import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Particles canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      alpha: number;
    }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 38; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(20, 184, 166, ${p.alpha})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // 3D tilt on photo
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      gsap.to(card, {
        rotateX,
        rotateY,
        scale: 1.03,
        duration: 0.4,
        ease: "power2.out",
        transformPerspective: 800,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

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
          buttonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "-=0.2",
        )
        .fromTo(
          photoRef.current,
          { opacity: 0, x: 40, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Floating animation on photo
  useEffect(() => {
    gsap.to(cardRef.current, {
      y: -10,
      duration: 2.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="beranda"
      className="scroll-mt-24 relative overflow-hidden rounded-4xl bg-bg-soft px-6 py-12 sm:px-10 sm:py-16"
    >
      <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p
            ref={badgeRef}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase"
            style={{ opacity: 0 }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Fullstack Developer & Digital Marketing
          </p>

          <h1
            ref={headingRef}
            className="mb-5 text-3xl leading-[1.05] font-bold tracking-tight text-primary sm:text-5xl"
            style={{ opacity: 0 }}
          >
            Hi, I'm Abdullah Husairin.
          </h1>

          <p
            ref={descRef}
            className="mb-8 max-w-xl text-base text-text-muted sm:text-lg"
            style={{ opacity: 0 }}
          >
            Semester 8 Computer Science student at Universitas Ibn Khaldun Bogor
            with 2+ years of experience as a Fullstack Web Developer.
            Experienced in building modern web applications using React,
            Next.js, and Spring Boot, with strong focus on performance, clean
            architecture, and SEO optimization. Also skilled in Digital
            Marketing and Content Creation.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-wrap gap-3"
            style={{ opacity: 0 }}
          >
            <a
              href="#proyek"
              className="group relative overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/30"
            >
              <span className="relative z-10">View My Projects</span>
              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0" />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-border bg-bg px-6 py-3 text-sm font-semibold text-text transition hover:bg-bg-soft hover:border-primary/50"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div
          ref={photoRef}
          className="flex justify-center lg:justify-end"
          style={{ opacity: 0 }}
        >
          <div className="relative">
            {/* Particle canvas */}
            <canvas
              ref={canvasRef}
              className="pointer-events-none absolute inset-0 z-10 h-full w-full"
              style={{ borderRadius: "1.5rem" }}
            />

            {/* Glow ring */}
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-xl" />

            {/* Rotating border */}
            <div
              className="absolute -inset-[3px] rounded-3xl"
              style={{
                background:
                  "conic-gradient(from 0deg, #14b8a6, transparent, #14b8a6, transparent, #14b8a6)",
                animation: "spin 6s linear infinite",
              }}
            />

            {/* Card with tilt */}
            <div
              ref={cardRef}
              className="relative z-10 h-72 w-72 overflow-hidden rounded-3xl shadow-2xl sm:h-80 sm:w-80"
              style={{ transformStyle: "preserve-3d", cursor: "pointer" }}
            >
              <img
                src="/foto.png"
                alt="Abdullah Husairin"
                className="h-full w-full object-cover"
              />
              {/* Overlay shimmer */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};
