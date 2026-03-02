export const ProjectsSection = () => {
  const projects = [
    {
      title: "POS & Billing System",
      description:
        "Aplikasi POS modern dengan pengelolaan transaksi, manajemen pesanan, dan integrasi API real-time. Dibangun dengan arsitektur frontend yang scalable dan maintainable.",
      image: "/images/projects/booking.png",
      tech: ["React", "TypeScript", "TanStack", "REST API", "Payment Gateaway"],
      liveUrl: "https://beranda-kahyangan.kasprima.co.id/",
    },
    {
      title: "Autocare Dashboard",
      description:
        "Dashboard admin untuk manajemen usaha cuci kendaraan yang mencakup pengelolaan data kendaraan, karyawan, dan keuangan. Berkontribusi dalam pengembangan modul CRUD serta struktur frontend yang terorganisir dan scalable.",
      image: "/images/projects/autocare.png",
      tech: ["React", "TypeScript", "REST API"],
      liveUrl: "https://autocare.kasprima.co.id/",
    },
    {
      title: "Website Dealer Motor Yamaha",
      description:
        "Website dealer berbasis Next.js dengan integrasi CMS serta fitur chatbot berbasis OpenRouter untuk meningkatkan interaksi pengguna.",
      image: "/images/projects/yamaha.png",
      tech: [
        "Next.js",
        "Tailwind",
        "Sanity CMS",
        "OpenRouter API",
        "EmailJS",
        "Clerk",
      ],
      liveUrl: "https://store.yamahahoky.com/",
    },
    {
      title: "Sistem Informasi Desa",
      description:
        "Website profil desa berbasis React JS dengan pengelolaan konten dinamis melalui Sanity CMS untuk memudahkan publikasi informasi dan transparansi data.",
      image: "/images/projects/desa.png",
      tech: ["React JS", "Tailwind", "Sanity CMS"],
      liveUrl: "https://kelurahan-lawanggintung.vercel.app/",
    },
    {
      title: "Undangan Pernikahan",
      description:
        "Landing page undangan pernikahan yang dibangun menggunakan HTML, CSS, dan JavaScript dengan fokus pada desain visual dan responsivitas..",
      image: "/images/projects/wedding.png",
      tech: ["HTML", "CSS", "Javascript"],
      liveUrl: "https://wedding-phi-murex.vercel.app/",
    },
  ];

  return (
    <section
      id="proyek"
      className="scroll-mt-24 mt-12 rounded-4xl bg-bg-soft px-6 py-12 sm:px-10 sm:py-16"
    >
      <p className="mb-3 text-sm font-semibold text-text-muted">
        Proyek Pilihan
      </p>

      <h2 className="mb-10 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        Beberapa Proyek yang Pernah Saya Kerjakan
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
                  Lihat Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
