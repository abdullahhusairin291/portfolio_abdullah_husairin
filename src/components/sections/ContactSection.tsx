import { Mail, Linkedin, Github } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 mt-12 rounded-4xl bg-bg-soft px-6 py-16 sm:px-10 sm:py-20"
    >
      <div className="relative text-center">
        {/* Decorative Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <p className="mb-3 text-sm font-semibold text-text-muted">
          Mari Terhubung
        </p>

        <h2 className="mb-6 text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Tertarik Bekerja Sama?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-base text-text-muted sm:text-lg">
          Saya terbuka untuk peluang kolaborasi, freelance, maupun full-time
          position sebagai Frontend Developer. Jangan ragu untuk menghubungi
          saya.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:husairin11@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20"
          >
            <Mail size={16} />
            Kirim Email
          </a>

          <a
            href="https://linkedin.com/in/username-kamu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-6 py-3 text-sm font-semibold text-text transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>

          <a
            href="https://github.com/abdullahhusairin291"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-6 py-3 text-sm font-semibold text-text transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
