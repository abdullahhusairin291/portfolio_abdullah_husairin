import { Github, Linkedin, Mail } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 mt-12 rounded-4xl bg-bg-soft px-6 py-12 sm:px-10 sm:py-16"
    >
      <p className="mb-3 text-sm font-semibold text-text-muted">About Me</p>

      <h2 className="mb-6 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        Fullstack Developer & Digital Marketing
      </h2>

      <div className="space-y-6 text-base leading-relaxed text-text-muted sm:text-lg">
        <p>
          I am a Semester 8 Computer Science student at Universitas Ibn Khaldun
          Bogor with over 2 years of hands-on experience as a Fullstack Web
          Developer.
        </p>

        <p>
          I specialize in building modern, high-performance web applications
          using React, Next.js, and Spring Boot. Experienced in developing
          complete solutions — from responsive frontends and RESTful APIs to
          backend systems and cloud deployments.
        </p>

        <p>
          In addition to development, I also have strong experience in Digital
          Marketing, including content strategy, short-form video production,
          Meta Ads (Instagram & Facebook), and TikTok Ads — helping businesses
          grow their online presence and generate sales.
        </p>
      </div>

      <div className="mt-12 flex items-center gap-4">
        <a
          href="https://github.com/abdullahhusairin291"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg text-text transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
        >
          <Github size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/abdullah-husairin/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg text-text transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
        >
          <Linkedin size={18} />
        </a>

        <a
          href="mailto:husairin11@gmail.com"
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg text-text transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
        >
          <Mail size={18} />
        </a>
      </div>
    </section>
  );
};
