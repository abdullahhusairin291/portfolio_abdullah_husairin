import { useEffect, useRef } from "react";

type Theme = "dark" | "light";

const getTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

export const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const themeRef = useRef<Theme>(getTheme());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let mouseX = width / 2;
    let mouseY = height / 2;
    let scrollY = 0;
    let animId: number;
    let darkAlpha = themeRef.current === "dark" ? 1 : 0;
    let time = 0;

    const stars: {
      x: number;
      y: number;
      r: number;
      alpha: number;
      twinkle: number;
      phase: number;
    }[] = [];
    for (let i = 0; i < 180; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height * 3,
        r: Math.random() * 1.2 + 0.2,
        alpha: Math.random() * 0.7 + 0.2,
        twinkle: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const nebulaOrbs = [
      {
        x: 0.15,
        y: 0.2,
        r: 380,
        color: "20,184,166",
        ox: 0,
        oy: 0,
        speed: 0.012,
      },
      {
        x: 0.85,
        y: 0.5,
        r: 320,
        color: "99,102,241",
        ox: 0,
        oy: 0,
        speed: 0.008,
      },
      {
        x: 0.5,
        y: 0.85,
        r: 280,
        color: "20,184,166",
        ox: 0,
        oy: 0,
        speed: 0.018,
      },
    ];

    const bubbles = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 30 + Math.random() * 40,
      speed: 0.005 + Math.random() * 0.01,
      phase: Math.random() * Math.PI * 2,
    }));

    const particles: {
      x: number;
      y: number;
      baseY: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    }[] = [];
    for (let i = 0; i < 55; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height * 3;
      particles.push({
        x,
        y,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.5 + 0.4,
        alpha: Math.random() * 0.35 + 0.1,
      });
    }

    const drawDark = () => {
      const mx = mouseX / width;
      const my = mouseY / height;

      nebulaOrbs.forEach((orb) => {
        orb.ox += ((mx - orb.x) * 0.1 - orb.ox) * orb.speed * 3;
        orb.oy += ((my - orb.y) * 0.1 - orb.oy) * orb.speed * 3;
        const cx = (orb.x + orb.ox) * width;
        const cy = (orb.y + orb.oy) * height;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, orb.r);
        grad.addColorStop(0, `rgba(${orb.color}, ${0.13 * darkAlpha})`);
        grad.addColorStop(1, `rgba(${orb.color}, 0)`);
        ctx.beginPath();
        ctx.arc(cx, cy, orb.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      stars.forEach((s) => {
        const screenY = s.y - scrollY * 0.25;
        if (screenY < -10 || screenY > height + 10) return;
        const a =
          s.alpha * (0.6 + 0.4 * Math.sin(time * s.twinkle * 60 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, screenY, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${a * darkAlpha})`;
        ctx.fill();
      });
    };

    const drawLight = () => {
      const la = 1 - darkAlpha;
      if (la < 0.01) return;

      const sx = width * 0.9;
      const sy = height * 0.08;

      const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, 220);

      glow.addColorStop(0, `rgba(255,220,120,${0.18 * la})`);
      glow.addColorStop(1, "rgba(255,220,120,0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      bubbles.forEach((b) => {
        const x =
          b.x +
          Math.cos(time * b.speed + b.phase) * 15 +
          (mouseX - width / 2) * 0.015;

        const y =
          b.y +
          Math.sin(time * b.speed + b.phase) * 20 +
          (mouseY - height / 2) * 0.015;

        const grad = ctx.createRadialGradient(
          x - b.r * 0.35,
          y - b.r * 0.35,
          0,
          x,
          y,
          b.r,
        );

        grad.addColorStop(0, `rgba(255,255,255,${0.6 * la})`);
        grad.addColorStop(0.25, `rgba(20,184,166,${0.18 * la})`);
        grad.addColorStop(1, `rgba(20,184,166,${0.03 * la})`);

        ctx.beginPath();
        ctx.arc(x, y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.strokeStyle = `rgba(20,184,166,${0.25 * la})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // highlight kaca
        ctx.beginPath();
        ctx.arc(x - b.r * 0.25, y - b.r * 0.25, b.r * 0.15, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255,255,255,${0.7 * la})`;
        ctx.fill();
      });
    };

    const drawParticles = () => {
      const isDark = darkAlpha > 0.5;
      particles.forEach((p) => {
        const screenY = p.baseY - scrollY * 0.4;
        if (screenY < -20 || screenY > height + 20) return;
        p.x += p.vx;
        p.baseY += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        const dx = p.x - mouseX;
        const dy = screenY - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / 180);
        const color = isDark ? "20,184,166" : "56,189,248";
        const alphaMultiplier = isDark ? 1 : 0.8;
        ctx.beginPath();
        ctx.arc(p.x, screenY, p.r + influence * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${(p.alpha + influence * 0.35) * alphaMultiplier})`;
        ctx.fill();
      });
    };

    const draw = () => {
      time++;
      const targetDark = themeRef.current === "dark" ? 1 : 0;
      darkAlpha += (targetDark - darkAlpha) * 0.035;

      ctx.clearRect(0, 0, width, height);

      if (darkAlpha > 0.01) {
        ctx.fillStyle = `rgba(8,15,30, ${darkAlpha})`;
        ctx.fillRect(0, 0, width, height);
      }
      if (darkAlpha < 0.99) {
        ctx.fillStyle = `rgba(248,250,252, ${1 - darkAlpha})`;
        ctx.fillRect(0, 0, width, height);
      }

      drawDark();
      drawLight();
      drawParticles();

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const observer = new MutationObserver(() => {
      themeRef.current = getTheme();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll", onScroll);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" />
  );
};
