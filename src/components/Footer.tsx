import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Mail, href: "mailto:husairin11@gmail.com", label: "Email" },
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
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-8 px-4 py-10 z-10">
      <div
        className="mx-auto max-w-6xl rounded-3xl px-6 py-8"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-semibold text-text">Abdullah Husairin</p>
            <p className="mt-1 text-xs text-text-muted">
              © {year} All rights reserved.
            </p>
            <p className="mt-0.5 text-xs text-text-muted">
              Built with React & Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={label}
                className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 text-text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <span className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Icon
                  size={16}
                  className="relative z-10 transition-colors duration-300 group-hover:text-white"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
