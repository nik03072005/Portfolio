import { Code2, ComputerIcon, Database, Terminal, Wrench, Lightbulb } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Terminal,
    items: ["JavaScript", "C++", "Python"],
  },
  {
    title: "Frameworks",
    icon: Code2,
    items: ["React", "Node.js", "Express", "Django"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "Linux", "Bash", "Postman"],
  },
  {
    title: "Core Concepts",
    icon: ComputerIcon,
    items: ["Data Structures", "Algorithms", "DBMS", "Operating Systems"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Core software engineering skills and technologies mastered through building production systems,
            solving complex problems, and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="glass rounded-3xl p-8 border border-primary/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <cat.icon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">{cat.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {cat.items.map((it) => (
                  <div
                    key={it}
                    className="flex items-center justify-center py-3 px-4 rounded-full border border-border bg-surface text-sm font-medium"
                  >
                    {it}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
