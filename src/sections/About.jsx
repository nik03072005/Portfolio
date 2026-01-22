import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code following software engineering best practices.",
  },
  {
    icon: Rocket,
    title: "System Design",
    description:
      "Architecting robust, high-performance systems with optimal data structures and algorithms.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Leading technical teams and collaborating on complex engineering projects.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Tackling challenging problems with innovative engineering solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Engineering solutions,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one line of code at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m Vinay, a passionate software engineer based in Varanasi,
                India. I specialize in modern web applications built with React
                and Next.js, and I enjoy turning complex UX and performance
                requirements into elegant, maintainable code.
              </p>
              <p>
                I work end-to-end — from designing intuitive interfaces with
                Tailwind and Material UI to building scalable backends with
                Node.js and databases like PostgreSQL and MongoDB. I focus on
                performance, developer ergonomics, and delivering delightful
                user experiences.
              </p>
              <p>
                When I’m not coding, I’m exploring new technologies,
                contributing to open-source, and sharing knowledge with the
                developer community. If you have an interesting project or need
                help shipping a production-ready web app, let’s connect.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission as a software engineer is to architect scalable, efficient systems that solve complex problems —
                writing clean, maintainable code, implementing robust solutions, and leveraging cutting-edge technologies
                to deliver exceptional software products."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in card-hover transition-transform duration-300"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
