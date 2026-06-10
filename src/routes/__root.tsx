import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import appCss from "../styles.css?url";
import { useEffect, useState } from "react";
import { SplashScreen } from "#/components/SplashScreen";
import Lenis from "lenis";
import { BackgroundCanvas } from "#/components/BackgroundCanvas";

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Portfolio Abdullah Husairin",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/jpeg",
        href: "/my_logo.jpg",
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body
        className="font-sans antialiased wrap:anywhere selection:bg-[rgba(79,184,178,0.24)]"
        style={{ transition: "background 0.8s ease" }}
      >
        <BackgroundCanvas />
        {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
        <div
          style={{
            opacity: splashDone ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          <Header />
          {children}
          <Footer />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
