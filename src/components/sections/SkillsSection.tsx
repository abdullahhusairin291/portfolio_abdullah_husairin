import { Layout, Server, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "TanStack Router",
      "Tailwind CSS",
    ],
  },
  {
    title: "API & Integration",
    icon: Server,
    skills: ["REST API", "Node.js", "Sanity CMS", "Clerk Auth"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: ["Git & GitHub", "Postman", "Vercel", "Figma"],
  },
];

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-24 mt-12 rounded-4xl bg-bg-soft px-6 py-14 sm:px-10 sm:py-20"
    >
      <div className="relative">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <p className="mb-3 text-sm font-semibold text-text-muted">Keahlian</p>

        <h2 className="mb-14 text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Teknologi & Tools yang Saya Gunakan
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="group relative rounded-2xl border border-border bg-bg p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <Icon size={18} />
                  </div>

                  <h3 className="text-lg font-semibold text-text">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-bg-soft px-3 py-1 text-xs font-medium text-text-muted transition group-hover:bg-primary/10 group-hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
