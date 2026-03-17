const experiences = [
  {
    period: "Aug 2025 — Present",
    role: "Full-Stack Developer",
    company: "Riyans Webtech Solution (On-site)",
    achievements: [
      "Built and maintained scalable web applications using MERN and Django stacks",
      "Implemented secure authentication with JWT + refresh tokens and role-based access",
      "Designed REST APIs and optimized backend performance for faster response times",
      "Worked with PostgreSQL and MongoDB, along with Linux-based deployments",
    ],
    technologies: [
      "React",
      "Node.js",
      "Django",
      "MongoDB",
      "PostgreSQL",
      "JWT",
      "Linux",
      "Docker",
      "Nginx",
    ],
    current: true,
  },
  {
    period: "Jun 2025 — Aug 2025",
    role: "Software Development Engineering Intern (ISRO)",
    company: "IIT Jodhpur (Remote)",
    achievements: [
      "Built a MIL-STD-1553 data analysis dashboard for jitter, periodicity, and deviation metrics",
      "Generated automated graphical reports from real trace data using D3.js",
      "Designed REST APIs with Django and PostgreSQL for data ingestion and analysis",
    ],
    technologies: ["React", "Django", "PostgreSQL", "D3.js"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience{" "}
            <span className="font-serif italic font-normal text-primary">
              {" "}
              Snapshot
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            Production experience across full-stack delivery, backend systems, and deployment workflows.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground mb-4">{exp.company}</p>
                    
                    {/* Achievement Bullets */}
                    <ul className="space-y-2.5 mt-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                          <span className="text-primary mt-1.5 shrink-0">▹</span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
