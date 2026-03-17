import { Code2, Coffee, Lightbulb, Rocket, Zap, Music } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Product-Minded Engineer",
    description: "Builds reliable features end-to-end with measurable impact, performance, and maintainability.",
  },
  {
    icon: Rocket,
    title: "Systems Thinking",
    description: "Designs clean APIs, resilient services, and scalable data models for real-world use cases.",
  },
  {
    icon: Code2,
    title: "Full-Stack Delivery",
    description: "React + Node/Django with secure auth, REST APIs, and production-ready deployments.",
  },
  {
    icon: Coffee,
    title: "DevOps Ready",
    description: "Containerization, CI/CD workflows, and Linux server operations for smooth releases.",
  },
];

const currentlyDoing = [
  { label: "Open to", value: "Full-Stack, SDE, DevOps, Cloud" },
  { label: "Experience", value: "8+ months in production teams" },
  { label: "Focus", value: "APIs, deployments, and scalable systems" },
  { label: "Tooling", value: "Docker, AWS, CI/CD" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Column - 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
              Engineering for
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-linear-to-r from-emerald-600 via-sky-600 to-amber-500">
                {" "}scale
              </span>
              {" "}and reliability
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Nikhil Chandra, a software engineer focused on full-stack delivery, backend systems, and production reliability. I enjoy building clean APIs, performant services, and resilient deployments that teams can trust.
              </p>
              <p>
                My work spans React frontends, Node.js/Django backends, and databases like PostgreSQL and MongoDB. I also handle DevOps essentials like Docker, Nginx, and CI/CD workflows so releases are smooth and repeatable.
              </p>
              <p>
                I am open to full-stack, SDE, DevOps, and cloud roles where I can build, ship, and scale reliable software. If your team values ownership and engineering rigor, let's talk.
              </p>
            </div>

            {/* Currently Section */}
            <div className="bg-linear-to-br from-emerald-500/10 via-sky-500/10 to-amber-500/10 backdrop-blur-xl border border-primary/20 rounded-xl p-5 sm:p-6 animate-fade-in animation-delay-300">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Currently</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {currentlyDoing.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-xs text-muted-foreground min-w-17.5">{item.label}:</span>
                    <span className="text-sm font-medium text-foreground/90">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="relative group animate-fade-in animation-delay-400">
              <div className="absolute -inset-0.5 bg-linear-to-r from-emerald-600 via-sky-600 to-amber-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-card/80 backdrop-blur-xl border border-primary/20 rounded-xl p-6">
                <div className="flex gap-3">
                  <div className="text-4xl text-primary/40 font-serif leading-none shrink-0">"</div>
                  <div>
                    <p className="text-base leading-relaxed italic text-foreground/90">
                      My philosophy? Ship fast, iterate faster. Write code humans can read. 
                      Make it work, make it right, make it fast—in that order. And always, 
                      <span className="text-primary font-medium"> always </span>
                      be learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 2/5 width */}
          <div className="lg:col-span-2 space-y-6 hidden md:block">
            {/* Highlights Grid */}
            <div className="grid gap-6">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${(idx + 2) * 100}ms` }}
                >
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-linear-to-r from-emerald-600 to-sky-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative bg-card/70 backdrop-blur-sm border border-primary/20 p-5 rounded-xl hover:border-primary/40 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-lg bg-linear-to-br from-emerald-500 to-sky-500 shrink-0">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1.5">{item.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Fun Stats */}
            <div className="bg-card/50 backdrop-blur-xl border border-primary/20 rounded-xl p-6 animate-fade-in animation-delay-600">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Music className="w-4 h-4 text-primary" />
                Quick Facts
              </h3>
              <div className="space-y-3">
                {[
                  { label: "🎓 University", value: "MMMMUT Gorakhpur" },
                  { label: "📚 Major", value: "ECE (2022-2026)" },
                  { label: "⌨️ Editor", value: "VS Code" },
                  { label: "🌐 Interest", value: "Cloud + DevOps" },
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="font-mono text-primary font-medium">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
