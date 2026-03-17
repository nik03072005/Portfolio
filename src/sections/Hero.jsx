import { Button } from "@/components/Button";
import {
  Terminal,
  ChevronRight,
  Github,
  Linkedin,
  Download,
  Code2,
  Sparkles,
  Link,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useState, useEffect } from "react";

const skills = [
  "JavaScript",
  "Python",
  "C++",
  "React",
  "Node.js",
  "Express",
  "Django",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "Terraform",
  "AWS (EC2, S3)",
  "GitHub Actions",
  "Jenkins",
  "Linux",
  "Nginx",
  "Git",
  "REST APIs",
  "Data Structures",
  "Algorithms",
];

const codeLines = [
  { line: 'class SoftwareEngineer {', delay: 0 },
  { line: '  constructor() {', delay: 500 },
  { line: '    this.name = "Nikhil Chandra";', delay: 1000 },
  { line: '    this.role = "Software Engineer — Full-Stack & Cloud/DevOps";', delay: 1500 },
  { line: '    this.location = "Kanpur, Uttar Pradesh, India";', delay: 2000 },
  { line: '    this.workAvailable = true;', delay: 2500 },
  { line: '  }', delay: 3000 },
  { line: '', delay: 3200 },
  { line: '  getSkills() {', delay: 3400 },
  { line: '    return ["React", "Node.js", "Docker", "AWS"];', delay: 3900 },
  { line: '  }', delay: 4400 },
  { line: '}', delay: 4900 },
];

export const Hero = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [particles] = useState(() => 
    [...Array(20)].map(() => ({
      width: Math.random() * 4 + 2,
      height: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      color: Math.random() < 0.33 ? '#0f766e' : Math.random() < 0.66 ? '#2563eb' : '#f59e0b',
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }))
  );

  useEffect(() => {
    const timers = codeLines.map((codeLine) => {
      return setTimeout(() => {
        setDisplayedLines(prev => [...prev, codeLine.line]);
      }, codeLine.delay);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const commands = [
      'npm run build',
      'docker compose up',
      'terraform plan',
      'kubectl get pods',
    ];
    let cmdIndex = 0;
    
    const commandInterval = setInterval(() => {
      setCurrentCommand(commands[cmdIndex]);
      cmdIndex = (cmdIndex + 1) % commands.length;
    }, 3000);

    return () => clearInterval(commandInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-background via-background to-emerald-950/5">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(15, 118, 110, 0.08) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(15, 118, 110, 0.08) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-40"
            style={{
              width: particle.width + 'px',
              height: particle.height + 'px',
              background: particle.color,
              left: particle.left + '%',
              top: particle.top + '%',
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-24 pt-28 sm:pt-32 pb-16 sm:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column - Terminal/Code Window */}
          <div className="space-y-6">
            <div className="space-y-3 animate-fade-in">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Software Engineer
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-foreground">
                Nikhil Chandra
              </h1>
              <p className="text-muted-foreground">
                Software Engineer | Full-Stack & Cloud/DevOps
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Building scalable end-to-end systems — from UI to cloud infrastructure.
              </p>
            </div>
            <div className="hidden sm:block space-y-6">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 text-muted-foreground animate-fade-in">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm">~/portfolio/developer.js</span>
                <div className="ml-auto flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
              </div>

              {/* Code Editor Window */}
              <div className="bg-card/50 backdrop-blur-xl border border-primary/20 rounded-lg overflow-hidden shadow-2xl shadow-primary/10 animate-fade-in animation-delay-100">
                <div className="bg-secondary/80 px-4 py-2 flex items-center gap-2 border-b border-border/50">
                  <Code2 className="w-4 h-4 text-primary" />
                  <span className="text-xs font-mono text-muted-foreground">developer.js</span>
                  <span className="ml-auto text-xs text-primary font-medium">● JavaScript</span>
                </div>
                
                <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed">
                  {displayedLines.map((line, index) => (
                    <div key={index} className="group">
                      <span className="text-muted-foreground select-none mr-4 inline-block w-6 text-right">
                        {line && index + 1}
                      </span>
                      <span className={
                        line.includes('class') || line.includes('constructor') || line.includes('return') || line.includes('getSkills') ? 'text-emerald-600' :
                        line.includes('this.') ? 'text-sky-600' :
                        line.includes('"') ? 'text-amber-600' :
                        line.includes('true') ? 'text-blue-600' :
                        'text-foreground/90'
                      }>
                        {line}
                        {index === displayedLines.length - 1 && showCursor && (
                          <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal Command Line */}
              <div className="bg-card/30 backdrop-blur-xl border border-emerald-500/30 rounded-lg px-4 py-3 font-mono text-xs sm:text-sm animate-fade-in animation-delay-200">
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">user@portfolio</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-sky-600">~</span>
                  <span className="text-muted-foreground">$</span>
                  <span className="text-foreground">{currentCommand}</span>
                  <span className="inline-block w-2 h-4 bg-emerald-500 ml-1 animate-pulse" />
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                className="group"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Terminal className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Let's Connect
              </Button>
              <AnimatedBorderButton
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-400">
              {[
                { icon: Github, href: "https://github.com/nik03072005", label: "github" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/nikhil-se", label: "linkedin" },
                { icon: Code2, href: "https://leetcode.com/u/nikhil03072005/", label: "leetcode" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-lg bg-card/30 border border-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-card border border-primary/30 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Stats & Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400 hidden md:block">
            {/* Status Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-linear-to-r from-emerald-600 via-sky-600 to-amber-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-card/80 backdrop-blur-xl border border-primary/30 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-500 to-sky-500 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Available for Work</h3>
                      <p className="text-sm text-muted-foreground">Full-time opportunities</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                  <div>
                    <div className="text-2xl font-bold text-primary">8+ mo</div>
                    <div className="text-xs text-muted-foreground">Industry Exp</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-sky-600">3+</div>
                    <div className="text-xs text-muted-foreground">Core Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600">Open</div>
                    <div className="text-xs text-muted-foreground">To New Roles</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Preview */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "React", level: 90, color: "from-sky-500 to-blue-500" },
                { name: "Node.js", level: 85, color: "from-emerald-500 to-teal-500" },
                { name: "Docker", level: 80, color: "from-slate-600 to-slate-500" },
                { name: "AWS", level: 75, color: "from-amber-500 to-orange-500" },
              ].map((tech, idx) => (
                <div key={idx} className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-lg p-4 hover:border-primary/40 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{tech.name}</span>
                    <span className="text-xs text-muted-foreground">{tech.level}%</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-linear-to-r ${tech.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${tech.level}%`,
                        animation: 'progress 2s ease-out'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Card */}
            <div className="bg-linear-to-br from-emerald-500/10 via-sky-500/10 to-amber-500/10 backdrop-blur-xl border border-primary/20 rounded-lg p-6">
              <div className="flex gap-3">
                <div className="text-4xl text-primary/40 font-serif leading-none">"</div>
                <div>
                  <p className="text-sm leading-relaxed text-foreground/90 italic">
                    Build systems that are clean, observable, and ready for scale.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Engineering principle</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
          <a
            href="#skills"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider font-mono">scroll</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
            </div>
          </a>
        </div>

        {/* Skills Marquee */}
        <div className="mt-24 lg:mt-32 animate-fade-in animation-delay-600">
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden py-6 border-y border-primary/10">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee gap-12">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0">
                  <span className="text-lg font-mono font-medium text-muted-foreground/70 hover:text-primary transition-colors cursor-default">
                          <ChevronRight className="w-4 h-4 inline mr-1 text-primary/50" />
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
