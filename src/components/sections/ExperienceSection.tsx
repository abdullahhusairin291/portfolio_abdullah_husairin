export const ExperienceSection = () => {
  const experiences = [
    {
      position: "Fullstack Web Developer",
      company: "PT KAS Autocare",
      period: "2025 - Present",
      type: "Freelance",
      description:
        "Developing and maintaining fullstack web applications with focus on modern architecture and user experience.",
      achievements: [
        "Contributed to AutoCare web application development using Agile/Scrum methodology",
        "Built a QR-based POS system for restaurant clients — scan QR, browse menu, and complete payment through web",
        "Developed fullstack applications using Spring Boot, MySQL, and deployed to Railway",
        "Managed digital marketing campaigns (Meta Ads & TikTok Ads) for multiple clients including barbershop, reflexology, and café",
      ],
    },
    {
      position: "Frontend Developer & Digital Marketing",
      company: "PT Hoky Mitra Sejati",
      period: "2023 - 2025",
      type: "Full-time",
      description: "Official Yamaha Motorcycle Dealer in Depok.",
      achievements: [
        "Built and maintained company website using React.js and later upgraded to Next.js with Sanity CMS",
        "Achieved #2 Google ranking for keyword 'Yamaha Depok' through SEO optimization",
        "Integrated chatbot, payment gateway, and dynamic content management",
        "Executed content strategy and social media campaigns that generated cross-border sales of 10+ units (nearly IDR 10 million in profit)",
        "Produced short-form videos and led live TikTok sessions to drive traffic and leads",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-24 mt-12 rounded-4xl bg-bg-soft px-6 py-12 sm:px-10 sm:py-16"
    >
      <p className="mb-3 text-sm font-semibold text-text-muted">Experience</p>

      <h2 className="mb-12 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        Professional Experience
      </h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-border bg-bg p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-xl font-semibold text-text">
                  {exp.position}
                </h3>
                <p className="text-primary font-medium">
                  {exp.company} • {exp.type}
                </p>
              </div>

              <div className="text-sm font-medium text-text-muted whitespace-nowrap">
                {exp.period}
              </div>
            </div>

            <p className="mt-4 text-text-muted">{exp.description}</p>

            <ul className="mt-6 space-y-3 text-sm text-text-muted">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary mt-2" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
