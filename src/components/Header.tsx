import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  useEffect(() => {
    let rafId: number;

    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const total =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
        setScrollProgress(progress);
        setScrolled(window.scrollY > 20);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.08)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.15)"
            : "1px solid transparent",
        }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-text cursor-pointer"
          >
            <Menu size={22} />
          </button>
          <a
            href="#beranda"
            className="text-base font-semibold tracking-tight text-text"
          >
            Abdullah Husairin
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <NavLinks />
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </nav>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent">
          <div
            className="h-full rounded-full"
            style={{
              width: `${scrollProgress}%`,
              background: "linear-gradient(90deg, #14b8a6, #56bdd4, #14b8a6)",
              transition: "none",
            }}
          />
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-3/4 max-w-xs shadow-xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          background: "rgba(15,23,42,0.95)",
          backdropFilter: "blur(20px)",
          borderRight: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <span className="text-base font-semibold text-text">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="text-text cursor-pointer"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 py-8 text-sm font-medium">
          <NavLinks onClick={() => setOpen(false)} />
        </div>
      </aside>
    </>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Proyek", href: "#proyek" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {links.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onClick}
          className="group relative text-text-muted transition hover:text-primary"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </>
  );
}
