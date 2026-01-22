import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "JavaScript",
  "C++",
  "Python",
  "React",
  "Node.js",
  "Express",
  "Django",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Linux",
  "Bash",
  "Postman",
  "Data Structures",
  "Algorithms",
  "DBMS",
  "Operating Systems",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto pl-8 md:pl-16 lg:pl-24 pr-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Hi, I'm 
                <br />
                <span className="text-primary glow-text">Nikhil Chandra</span>
                
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Software Engineer specializing in full-stack development and scalable system design. 
                Building production-grade applications that solve complex engineering challenges.
              </p>
            </div>
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button
                size="sm"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me <ArrowRight className="w-4 h-4" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-4 h-4" />
                Download Resume
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/nc03072005" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/nikhil-chandra" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300 -mt-20 md:-mt-28 lg:-mt-36 xl:-mt-44">
            {/* Profile Image */}
            <div className="relative max-w-sm mx-auto">
              <div
                className="absolute inset-0 
              rounded-full bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-3xl animate-pulse"
              />
              <div className="relative glass rounded-full p-2 glow-border group overflow-hidden">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nikhil&backgroundColor=b6e3f4&accessories=prescription02&clothing=hoodie&clothingGraphic=vue&eyebrows=defaultNatural&eyes=default&mouth=smile&top=shortHair"
                  alt="Nikhil Chandra"
                  className="w-full aspect-square object-cover rounded-full transition-transform duration-500 ease-out group-hover:scale-105 relative z-0"
                />

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 z-10 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-80" />
              </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 
        animate-fade-in animation-delay-800"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>

        {/* Skills Section */}
        <div className="absolute -bottom-12 left-0 right-0 animate-fade-in animation-delay-600">
          {/* <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p> */}
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
