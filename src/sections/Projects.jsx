import { ArrowUpRight, Github, Code2, Terminal, ExternalLink } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Button } from "@/components/Button";
import { useState } from "react";

const projects = [
  {
    title: "Mendora Travels — Travel Booking Platform",
    description:
      "Travel discovery and booking experience with curated packages, filters, and inquiry flows for trip planning.",
    image: "/projects/project9.png",
    tags: ["React", "Vite", "Node.js", "MongoDB", "Docker", "AWS"],
    highlights: [
      "Destination browsing with package cards and pricing",
      "Category filters and responsive carousel UI",
      "Inquiry forms with backend-driven content",
    ],
    link: "https://mendoratravels.com/",
    github: "https://github.com/nik03072005/Mendora_Travels",
    codeSnippet: `// Package filter + grouping
const filterPackages = (packages, activeFilters) => {
  const visible = packages.filter((pkg) =>
    activeFilters.every((f) => pkg.tags.includes(f))
  );
  return visible.sort((a, b) => a.price - b.price);
};

const groupByCategory = (packages) => {
  return packages.reduce((acc, pkg) => {
    acc[pkg.category] = acc[pkg.category] || [];
    acc[pkg.category].push(pkg);
    return acc;
  }, {});
};`,
    impact: ["Discovery UX", "Responsive UI", "Faster Inquiries"],
  },
  {
    title: "Quizzo Kids — Online Quiz Mobile Platform",
    description:
      "Production-ready mobile quiz app with real-time leaderboards, payments, and admin tooling for scalable learning.",
    image: "/projects/project8.png",
    tags: ["React Native", "Expo", "Node.js", "MongoDB", "AWS S3", "Docker", "CI/CD"],
    highlights: [
      "Dynamic quiz engine with variable question sets",
      "JWT auth, role-based access, and Razorpay payments",
      "Admin panel with analytics, moderation, and certificates",
    ],
    link: "https://play.google.com/store/apps/details?id=com.quizzokids.app",
    github: "https://github.com/nik03072005/Quizzo",
    codeSnippet: `// Leaderboard fetch + rank mapping
const fetchLeaderboard = async () => {
  const response = await fetch('/api/leaderboard');
  if (!response.ok) throw new Error('Leaderboard unavailable');
  const data = await response.json();
  return data.map((row, index) => ({ ...row, rank: index + 1 }));
};

const isProUser = (user) => user.plan === 'pro' && !user.isExpired;`,
    impact: ["Live Rankings", "Secure Payments", "Engagement Insights"],
  },
  {
    title: "Digital Library Management System",
    description:
      "Full-stack academic platform aggregating DOAJ and DOAB research with secure access, analytics, and content management.",
    image: "/projects/project7.png",
    tags: ["Next.js", "Node.js", "MongoDB", "AWS S3", "Docker", "AWS"],
    highlights: [
      "Aggregated 900,000+ open-access records via DOAJ/DOAB",
      "OTP-based authentication and secure document storage",
      "Admin CMS with analytics and activity tracking",
    ],
    link: "https://khowangcollege.digitallib.in/",
    github: "https://github.com/nik03072005/JournalWeb9",
    codeSnippet: `// Research search handler
const searchPublications = async (query, page = 1) => {
  const params = new URLSearchParams({ q: query, page: String(page) });
  const response = await fetch(\`/api/search?\${params.toString()}\`);
  if (!response.ok) throw new Error('Search failed');
  return response.json();
};

const normalizeRecord = (record) => ({
  id: record?.id,
  title: record?.title?.[0],
  year: record?.bibjson?.year,
});`,
    impact: ["Research Access", "Secure Storage", "Usage Insights"],
  },
  {
    title: "Spacecraft Data Analyzer (ISRO-Funded Research Project)",
    description:
      "ISRO-funded spacecraft bus log analysis platform led by a team for secure ingestion and performance dashboards.",
    image: "/projects/project2.png",
    tags: ["React", "Django", "PostgreSQL", "D3.js", "Docker", "AWS"],
    highlights: [
      "Engineered REST APIs with PostgreSQL backend for log ingestion",
      "Designed dashboards for timing deviations and system metrics",
      "Built end-to-end analysis flow from trace import to insights",
    ],
    link: "#",
    github: "https://github.com/nik03072005/GUI_Analyzer_ISRO",
    codeSnippet: `# Protocol analysis engine
class BusAnalyzer:
    def analyze_timing(self, data_stream):
        violations = []
        for i, packet in enumerate(data_stream):
            response_time = packet.timestamp - data_stream[i - 1].timestamp
            if response_time > SPEC_MAX_RESPONSE_TIME:
                violations.append({
                    "packet_id": packet.id,
                    "delay": response_time,
                    "severity": "critical",
                })
        return self.generate_report(violations)

    def jitter_stats(self, timings):
        avg = sum(timings) / len(timings)
        return {"avg": avg, "max": max(timings)}`,
    impact: ["Secure Ingestion", "Timing Analytics", "Performance Metrics"],
  },
  {
    title: "iPhone 15 Pro Landing Page Clone",
    description:
      "High-fidelity Apple-style landing page with interactive 3D visuals, smooth scroll animations, and performance-tuned transitions.",
    image: "/projects/project6.png",
    tags: ["React", "Vite", "Tailwind", "GSAP", "Three.js"],
    highlights: [
      "Interactive 3D product model",
      "Scroll-linked animation sequences",
      "Responsive, polished UI",
    ],
    link: "https://i-phone15-liard.vercel.app/",
    github: "https://github.com/nik03072005/iPhone15",
    codeSnippet: `// GSAP scroll trigger
gsap.to(modelRef.current.rotation, {
  y: Math.PI * 2,
  scrollTrigger: { scrub: true, start: 'top top', end: 'bottom top' }
});

// Snapshot for performance
const captureFrame = () => renderer.domElement.toDataURL('image/webp');`,
    impact: ["3D UI", "Scroll Anim", "Optimized"],
  },
  {
    title: "Perfume E-Commerce Frontend",
    description:
      "Responsive storefront UI with clean product presentation, smooth browsing, and a simple cart interaction flow.",
    image: "/projects/project5.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    highlights: [
      "Blue-themed modern interface",
      "Product cards with pricing",
      "Interactive cart UI",
    ],
    link: "https://nik03072005.github.io/Perfume-e-commerce/",
    github: "https://github.com/nik03072005/Perfume-e-commerce",
    codeSnippet: `// Add to cart (UI)
const handleAdd = (id) => {
  cart.add(id);
  renderCart();
  toast.success('Added to cart');
};

const total = cart.items.reduce((sum, item) => sum + item.price, 0);`,
    impact: ["Product Listings", "Cart UX", "Mobile-Ready"],
  },
  {
    title: "Video Hosting Platform",
    description:
      "YouTube-like platform with authentication, uploads, and streaming. Secure user management, media handling, and production-ready deployment.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "MongoDB", "PostgreSQL", "Cloudinary"],
    highlights: [
      "Role-based access and content moderation",
      "Resumable uploads with CDN delivery",
      "Scalable streaming pipeline",
    ],
    link: "#",
    github: "https://github.com/nik03072005/Video-Hosting-Platform",
    codeSnippet: `// JWT auth + upload guard
const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

const canUpload = (req, res, next) =>
  req.user?.role === 'creator' ? next() : res.status(403).end();`,
    impact: ["Secure Uploads", "Streaming Ready", "Cloud Deployment"],
  },
  {
    title: "Tech-Srijan 2025 Fest Website",
    description:
      "Official MMMUT technical fest site for event info, registration, and updates with a theme-driven UI and smooth UX.",
    image: "/projects/project4.png",
    tags: ["React", "UI/UX", "Responsive", "Deployment"],
    highlights: [
      "Event discovery with clear CTAs",
      "Mobile-first responsive layout",
      "Live updates during fest week",
    ],
    link: "https://techsrijan.vercel.app/",
    github: "https://github.com/nik03072005",
    codeSnippet: `// Registration CTA
const handleRegister = () => {
  navigate('/register');
  trackEvent('register_click', { source: 'fest_home' });
};

const filterEvents = (events, query) =>
  events.filter((event) => event.title.toLowerCase().includes(query));`,
    impact: ["Event Listings", "Mobile-Ready", "Live Launch"],
  },
];

export const Projects = () => {
  const [, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-12 sm:mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            Projects &
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-linear-to-r from-emerald-600 via-sky-600 to-amber-500">
              {" "}Impact
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Real-world applications solving actual problems • Code that ships
          </p>
        </div>
        {/* Projects Grid */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              onMouseEnter={() => setSelectedProject(idx)}
              onMouseLeave={() => setSelectedProject(null)}
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-emerald-600 via-sky-600 to-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative bg-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-6 p-5 sm:p-6 items-stretch">
                  {/* Left: Info */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-linear-to-br from-emerald-500 to-sky-500">
                          <Terminal className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex gap-2 mt-1">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                            >
                              <ExternalLink className="w-3 h-3" />
                              Live
                            </a>
                            <span className="text-muted-foreground">•</span>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                            >
                              <Github className="w-3 h-3" />
                              Code
                            </a>
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {project.highlights?.length > 0 && (
                      <div className="space-y-1">
                        {project.highlights.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Impact Metrics */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
                      {project.impact.map((metric, i) => (
                        <div key={i} className="bg-secondary/50 rounded-lg p-3 text-center border border-border/30">
                          <div className="text-sm font-semibold text-primary">{metric}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-3 py-1 rounded-full bg-surface/50 text-xs font-mono border border-primary/20 text-foreground/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Code Snippet */}
                  <div className="relative hidden md:flex h-full w-full">
                    <div className="absolute -inset-1 bg-linear-to-br from-emerald-500/20 to-sky-500/20 rounded-lg blur-sm opacity-50"></div>
                    <div className="relative bg-secondary/90 backdrop-blur-sm border border-primary/30 rounded-lg overflow-hidden h-full min-h-64 flex flex-col w-full">
                      {/* Code Editor Header */}
                      <div className="flex items-center justify-between px-3 py-2 border-b border-border/50 bg-card/50">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-3 h-3 text-primary" />
                          <span className="text-xs font-mono text-muted-foreground">
                            {project.tags[0].toLowerCase().includes('react') ? 'component.js' : 
                             project.tags[0].toLowerCase().includes('python') || project.tags[0].toLowerCase().includes('django') ? 'analyzer.py' : 
                             'server.js'}
                          </span>
                        </div>
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500/60" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                          <div className="w-2 h-2 rounded-full bg-green-500/60" />
                        </div>
                      </div>

                      {/* Code Content */}
                      <pre className="p-4 text-[11px] sm:text-xs font-mono leading-relaxed overflow-auto flex-1 no-scrollbar">
                        <code className="text-foreground/80">
                          {project.codeSnippet.split('\n').map((line, i) => (
                            <div key={i} className="hover:bg-primary/5 px-2 -mx-2 rounded">
                              <span className="text-muted-foreground/50 select-none inline-block w-6 text-right mr-3">
                                {i + 1}
                              </span>
                              <span className={
                                line.includes('const') || line.includes('class') || line.includes('async') || line.includes('def') ? 'text-emerald-600' :
                                line.includes('return') || line.includes('if') || line.includes('for') ? 'text-sky-600' :
                                line.includes("'") || line.includes('"') || line.includes('`') ? 'text-amber-600' :
                                line.includes('//') || line.includes('#') ? 'text-muted-foreground/60 italic' :
                                'text-foreground/70'
                              }>
                                {line}
                              </span>
                            </div>
                          ))}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-16 animate-fade-in animation-delay-600 flex flex-wrap items-center justify-center gap-4">
          <AnimatedBorderButton
            as="a"
            href="https://github.com/nik03072005"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All on GitHub
            <Github className="w-4 h-4" />
          </AnimatedBorderButton>
          {projects.length > 3 && (
            <Button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="text-sm"
            >
              {showAll ? "Show Less" : "View All"}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
