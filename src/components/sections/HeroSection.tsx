export const HeroSection = () => {
  return (
    <section
      id="beranda"
      className="scroll-mt-24 relative overflow-hidden rounded-4xl bg-bg-soft px-6 py-12 sm:px-10 sm:py-16"
    >
      <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold text-text-muted">
            Fullstack Developer & Digital Marketing
          </p>

          <h1 className="mb-5 text-3xl leading-[1.05] font-bold tracking-tight text-primary sm:text-5xl">
            Hi, I'm Abdullah Husairin.
          </h1>

          <p className="mb-8 max-w-xl text-base text-text-muted sm:text-lg">
            Semester 8 Computer Science student at Universitas Ibn Khaldun Bogor
            with 2+ years of experience as a Fullstack Web Developer.
            Experienced in building modern web applications using React,
            Next.js, and Spring Boot, with strong focus on performance, clean
            architecture, and SEO optimization. Also skilled in Digital
            Marketing and Content Creation.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#proyek"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-border bg-bg px-6 py-3 text-sm font-semibold text-text transition hover:bg-bg-soft"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-3xl bg-primary/10" />
            <div className="relative h-72 w-72 overflow-hidden rounded-3xl shadow-2xl sm:h-80 sm:w-80">
              <img
                src="/foto.png"
                alt="Abdullah Husairin"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
