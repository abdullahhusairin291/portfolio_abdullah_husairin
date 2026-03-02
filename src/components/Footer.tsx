import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border bg-bg px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm text-text-muted">
              © {year} Abdullah Husairin. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-text-muted">
              Built with React, TanStack Router & Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:husairin11@gmail.com"
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg text-text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              <Mail size={16} />
            </a>

            <a
              href="https://github.com/abdullahhusairin291"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg text-text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              <Github size={16} />
            </a>

            <a
              href="https://linkedin.com/in/username-kamu"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg text-text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
