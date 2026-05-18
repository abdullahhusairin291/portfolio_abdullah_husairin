export const ProjectsSection = () => {
  const projects = [
    {
      title: "AutoCare Web Application",
      description:
        "Contributed to the development of a fullstack web application for vehicle care business using Agile/Scrum methodology. Implemented CRUD operations and responsive frontend interfaces.",
      image: "/images/projects/autocare.png",
      tech: ["Next.js", "TypeScript", "Spring Boot", "MySQL", "REST API"],
      liveUrl: "https://autocare.kasprima.co.id/",
    },
    {
      title: "QR-Based POS System",
      description:
        "Built a modern QR-based Point of Sale system for a restaurant. Customers can scan QR code, browse menu, and complete payment directly through the web application.",
      image: "/images/projects/booking.png",
      tech: ["React", "Spring Boot", "MySQL", "Payment Gateway"],
      liveUrl: "https://beranda-kahyangan.kasprima.co.id/",
    },
    {
      title: "Yamaha Dealer Website",
      description:
        "Developed and maintained the official website for Yamaha motorcycle dealer. Upgraded from React to Next.js with Sanity CMS, chatbot integration, payment gateway, and achieved #2 Google ranking for 'Yamaha Depok'.",
      image: "/images/projects/yamaha.png",
      tech: ["Next.js", "Sanity CMS", "React Helmet", "SEO", "Payment Gateway"],
      liveUrl: "https://store.yamahahoky.com/",
    },
    {
      title: "Village Information System",
      description:
        "Built a dynamic village profile website with content management system, allowing easy information publishing and public data transparency.",
      image: "/images/projects/desa.png",
      tech: ["React.js", "Tailwind CSS", "Sanity CMS"],
      liveUrl: "https://kelurahan-lawanggintung.vercel.app/",
    },
    {
      title: "Wedding Invitation Website",
      description:
        "Elegant and responsive digital wedding invitation with beautiful animations and user-friendly interface.",
      image: "/images/projects/wedding.png",
      tech: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://wedding-phi-murex.vercel.app/",
    },
  ];

  return (
    <section
      id="proyek"
      className="scroll-mt-24 mt-12 rounded-4xl bg-bg-soft px-6 py-12 sm:px-10 sm:py-16"
    >
      <p className="mb-3 text-sm font-semibold text-text-muted">
        Featured Projects
      </p>

      <h2 className="mb-10 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        Selected Projects I've Worked On
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-2xl border border-border bg-bg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="h-52 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-lg font-semibold text-text">
                {project.title}
              </h3>

              <p className="mb-4 text-sm text-text-muted">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 text-xs text-text-muted">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-bg-soft px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-primary-hover"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
