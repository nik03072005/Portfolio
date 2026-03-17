import { useEffect, useState } from "react";
import { Code2, Database, Terminal, Wrench, BookOpen, Zap, Sparkles } from "lucide-react";

const AwsLogo = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
  >
    <rect x="1" y="1" width="30" height="30" rx="6" stroke="currentColor" strokeWidth="2" />
    <text
      x="16"
      y="20"
      textAnchor="middle"
      fontSize="10"
      fontWeight="700"
      fill="currentColor"
      fontFamily="Space Grotesk, sans-serif"
    >
      AWS
    </text>
  </svg>
);

const skillsData = [
  {
    category: "Languages",
    icon: Terminal,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "JavaScript", level: "Advanced", usage: "Production experience", icon: Code2 },
      { name: "Python", level: "Intermediate", usage: "Used in internships", icon: Code2 },
      { name: "C++", level: "Intermediate", usage: "Academic", icon: Code2 },
    ],
  },
  {
    category: "Frontend",
    icon: Code2,
    color: "from-sky-500 to-blue-500",
    skills: [
      { name: "React", level: "Advanced", usage: "Production experience", icon: Code2 },
      { name: "React Native", level: "Intermediate", usage: "Project usage", icon: Code2 },
      { name: "Tailwind CSS", level: "Advanced", usage: "Production experience", icon: Code2 },
    ],
  },
  {
    category: "Backend",
    icon: Zap,
    color: "from-emerald-500 to-green-500",
    skills: [
      { name: "Node.js", level: "Advanced", usage: "Production experience", icon: Zap },
      { name: "Express", level: "Advanced", usage: "Production experience", icon: Zap },
      { name: "Django", level: "Intermediate", usage: "Used in internships", icon: Zap },
    ],
  },
  {
    category: "Database",
    icon: Database,
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "MongoDB", level: "Advanced", usage: "Production experience", icon: Database },
      { name: "PostgreSQL", level: "Intermediate", usage: "Used in internships", icon: Database },
    ],
  },
  {
    category: "DevOps",
    icon: Wrench,
    color: "from-slate-600 to-slate-500",
    skills: [
      { name: "Docker", level: "Intermediate", usage: "Production experience", icon: Wrench },
      { name: "Kubernetes", level: "Intermediate", usage: "Project usage", icon: Wrench },
      { name: "Terraform", level: "Beginner", usage: "Project usage", icon: Wrench },
      { name: "GitHub Actions", level: "Intermediate", usage: "Project usage", icon: Wrench },
      { name: "Jenkins", level: "Beginner", usage: "Project usage", icon: Wrench },
    ],
  },
  {
    category: "Cloud & Infra",
    icon: AwsLogo,
    color: "from-amber-600 to-orange-600",
    skills: [
      { name: "AWS (EC2, S3)", level: "Intermediate", usage: "Project usage", icon: Terminal },
      { name: "Linux", level: "Advanced", usage: "Production experience", icon: Terminal },
      { name: "Nginx", level: "Intermediate", usage: "Production experience", icon: Terminal },
      { name: "Git & GitHub", level: "Advanced", usage: "Production experience", icon: Terminal },
    ],
  },
  {
    category: "Core CS",
    icon: BookOpen,
    color: "from-blue-600 to-indigo-600",
    skills: [
      { name: "Data Structures", level: "Advanced", usage: "Academic", icon: BookOpen },
      { name: "Algorithms", level: "Advanced", usage: "Academic", icon: BookOpen },
      { name: "System Design", level: "Intermediate", usage: "Project usage", icon: BookOpen },
    ],
  },
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [direction, setDirection] = useState("right");

  const levelToScore = (level) => {
    if (level === "Advanced") return 3;
    if (level === "Intermediate") return 2;
    return 1;
  };

  const active = skillsData[activeCategory];
  const slideClass = direction === "right" ? "sm:slide-smooth-right" : "sm:slide-smooth-left";

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCategory((prev) => {
        const next = (prev + 1) % skillsData.length;
        setDirection(next > prev ? "right" : "left");
        return next;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl hidden sm:block" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl hidden sm:block" />
      <div className="absolute top-10 right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl hidden sm:block" />
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(15,118,110,0.12) 0, transparent 35%), radial-gradient(circle at 90% 10%, rgba(37,99,235,0.10) 0, transparent 35%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Technical Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            Skills &
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-linear-to-r from-emerald-600 via-sky-600 to-amber-500">
              {" "}Expertise
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            A comprehensive tech stack built through hands-on projects and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {/* Left: Tabs + Carousel */}
          <div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar bg-card/50 border border-border/60 rounded-full px-2 py-2">
              {skillsData.map((category, idx) => (
                <button
                  key={category.category}
                  type="button"
                  onClick={() => {
                    setDirection(idx > activeCategory ? "right" : "left");
                    setActiveCategory(idx);
                  }}
                  className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-full border transition-all ${
                    activeCategory === idx
                      ? `bg-secondary/80 border-primary/40 shadow-sm ${slideClass}`
                      : "bg-card/50 border-border/60"
                  }`}
                >
                  <span className={`p-2 rounded-lg bg-linear-to-br ${category.color}`}>
                    <category.icon className="w-4 h-4 text-white" />
                  </span>
                  {activeCategory === idx && (
                    <span className="text-sm font-semibold">{category.category}</span>
                  )}
                </button>
              ))}
            </div>

            <div className="relative mt-6 overflow-hidden sm:overflow-visible">
              <div className={`absolute -inset-1 bg-linear-to-r ${active.color} rounded-3xl blur opacity-10 hidden sm:block`} />
              <div
                className="absolute inset-0 rounded-3xl bg-card/80 fade-soft pointer-events-none"
                key={`${active.category}-fade`}
              />
              <div
                className={`relative bg-card/85 backdrop-blur-xl border border-primary/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[0_18px_60px_rgba(15,23,42,0.22)] min-h-0 max-h-none md:min-h-[420px] md:max-h-[420px] animate-fade-in ${slideClass} w-full max-w-full overflow-hidden`}
                key={active.category}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className={`p-3 rounded-xl bg-linear-to-br ${active.color}`}>
                      <active.icon className="w-5 h-5 text-white" />
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold">{active.category}</h3>
                      <p className="hidden sm:block text-sm text-muted-foreground">
                        Signals: proficiency + real-world usage
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-wrap gap-2 text-[11px]">
                    <span className="px-2 py-1 rounded-full bg-secondary/70 border border-border/60 text-muted-foreground">
                      Advanced
                    </span>
                    <span className="px-2 py-1 rounded-full bg-secondary/70 border border-border/60 text-muted-foreground">
                      Intermediate
                    </span>
                    <span className="px-2 py-1 rounded-full bg-secondary/70 border border-border/60 text-muted-foreground">
                      Beginner
                    </span>
                  </div>
                </div>

                <div className="relative mt-4 sm:mt-5">
                  <div className="grid gap-3 sm:grid-cols-2 md:max-h-[280px] md:overflow-y-auto pr-1 no-scrollbar">
                  {active.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative bg-secondary/40 border border-border/60 rounded-2xl p-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="p-2 rounded-lg bg-surface/70 border border-border/60">
                            <skill.icon className="w-4 h-4 text-muted-foreground" />
                          </span>
                          <span className="font-medium text-foreground/90">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{skill.level}</span>
                      </div>

                      <div className="mt-3 flex items-center gap-2">
                        {[...Array(3)].map((_, i) => (
                          <span
                            key={i}
                            className={`h-1.5 w-7 rounded-full border border-border/60 transition-colors ${
                              i < levelToScore(skill.level)
                                ? `bg-linear-to-r ${active.color}`
                                : "bg-secondary/40"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-surface/70 border border-border/60 text-muted-foreground">
                          {skill.usage}
                        </span>
                      </div>
                    </div>
                  ))}
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-linear-to-t from-card/90 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: All Skills Mosaic */}
          <div className="mt-8 lg:mt-0 lg:pt-6 hidden sm:block">
            <div className="relative bg-card/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-6 shadow-[0_14px_40px_rgba(15,23,42,0.18)] min-h-0 max-h-none md:min-h-[420px] md:max-h-[420px]">
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="text-lg font-semibold">All Skills</h3>
                <span className="text-xs text-muted-foreground">
                  {skillsData.reduce((sum, group) => sum + group.skills.length, 0)} total
                </span>
              </div>
              <div className="flex flex-wrap gap-2 md:max-h-[280px] md:overflow-y-auto pr-1 no-scrollbar">
                {skillsData.flatMap((group) =>
                  group.skills.map((skill) => (
                    <span
                      key={`${group.category}-${skill.name}`}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/40 border border-border/60 text-[13px] text-foreground/80"
                      title={`${skill.level} • ${skill.usage}`}
                    >
                      <skill.icon className="w-3.5 h-3.5 text-muted-foreground" />
                      {skill.name}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-xl border border-primary/20 rounded-full">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Always learning • Currently exploring:{" "}
              <span className="text-foreground font-medium">Kubernetes, Terraform, AWS</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
