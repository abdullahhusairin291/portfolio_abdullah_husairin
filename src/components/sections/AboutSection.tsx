import { Github, Linkedin, Mail } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="tentang"
      className="scroll-mt-24 mt-12 rounded-4xl bg-bg-soft px-6 py-12 sm:px-10 sm:py-16"
    >
      <p className="mb-3 text-sm font-semibold text-text-muted">Tentang Saya</p>

      <h2 className="mb-6 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        Membangun Produk yang Terstruktur dan Menarik
      </h2>

      <div className="space-y-6 text-base leading-relaxed text-text-muted sm:text-lg">
        <p>
          Saya adalah seorang frontend developer yang berfokus pada pembangunan
          aplikasi web yang terstruktur, scalable, dan nyaman digunakan.
        </p>

        <p>
          Berpengalaman menggunakan React dan Next.js dalam membangun dashboard,
          sistem terintegrasi API, serta website berbasis CMS dengan desain
          antarmuka modern dan intuitif.
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
          href="https://linkedin.com/in/username-kamu"
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
