import { Database, Server, Users, Zap, Shield, Box, ArrowRight } from "lucide-react";

export const TechnicalDeepDive = () => {
  return (
    <section id="deep-dive" className="py-24 sm:py-32 relative overflow-hidden bg-secondary/20">
      {/* Background Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            DevOps & Cloud
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            Production-Ready
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-linear-to-r from-emerald-600 via-sky-600 to-amber-500">
              {" "}Delivery Workflow
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            A concise view of how I ship, deploy, and maintain full-stack systems with reliable DevOps practices.
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* System Architecture Diagram */}
          <div className="relative group animate-fade-in animation-delay-300 hidden md:block">
            <div className="absolute -inset-0.5 bg-linear-to-r from-emerald-600 via-sky-600 to-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Box className="w-6 h-6 text-primary" />
                DevOps Workflow
              </h3>
              
              {/* Flow Diagram */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* CI/CD */}
                <div className="bg-secondary/50 border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-linear-to-br from-sky-500 to-blue-500">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold">CI/CD Pipeline</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• GitHub Actions / Jenkins</li>
                    <li>• Build, test, lint stages</li>
                    <li>• Artifact versioning</li>
                    <li>• Automated release steps</li>
                    <li>• Deployment approvals</li>
                  </ul>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                </div>

                {/* Containers */}
                <div className="bg-secondary/50 border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-linear-to-br from-emerald-500 to-teal-500">
                      <Server className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold">Containers & Runtime</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Docker & Docker Compose</li>
                    <li>• Kubernetes fundamentals</li>
                    <li>• Nginx reverse proxy</li>
                    <li>• Environment configuration</li>
                    <li>• Secure secrets handling</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <ArrowRight className="w-8 h-8 text-primary rotate-90 animate-pulse" />
              </div>

              {/* Cloud Layer */}
              <div className="bg-secondary/50 border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all mt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-linear-to-br from-amber-500 to-orange-500">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold">Cloud & Infrastructure</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground mb-2">Compute & Storage</p>
                    <ul className="space-y-1">
                      <li>• AWS EC2 for deployments</li>
                      <li>• S3 for media and assets</li>
                      <li>• Environment hardening</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-2">Infrastructure as Code</p>
                    <ul className="space-y-1">
                      <li>• Terraform basics</li>
                      <li>• Repeatable provisioning</li>
                      <li>• Cloud-ready configuration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Technical Decisions */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Zap,
                title: "Containerization",
                decision: "Dockerize services for consistent runtime environments",
                reason: "Eliminates machine-specific drift and simplifies deployment",
                result: "Predictable builds across dev, staging, and prod",
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: Shield,
                title: "CI/CD Automation",
                decision: "Automated pipelines with GitHub Actions / Jenkins",
                reason: "Faster feedback loops and reliable release processes",
                result: "Safer deployments with fewer manual steps",
                color: "from-sky-500 to-blue-500"
              },
              {
                icon: Database,
                title: "Infrastructure as Code",
                decision: "Terraform basics for repeatable provisioning",
                reason: "Version-controlled infra enables faster iteration",
                result: "Consistent environments and easier rollback",
                color: "from-amber-500 to-orange-500"
              },
              {
                icon: Server,
                title: "Secure Access",
                decision: "JWT auth, RBAC patterns, and Nginx reverse proxy",
                reason: "Protects APIs while keeping routing and TLS clean",
                result: "Safer access and better operational control",
                color: "from-slate-600 to-slate-500"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${(idx + 4) * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-linear-to-r from-emerald-600 to-sky-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-card/70 backdrop-blur-xl border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all h-full">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-linear-to-br ${item.color} shrink-0`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-foreground/90">
                          <span className="font-medium text-primary">Decision:</span> {item.decision}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium text-foreground">Why:</span> {item.reason}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium text-green-400">Result:</span> {item.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Performance Metrics */}
          <div className="relative group animate-fade-in animation-delay-800">
            <div className="absolute -inset-0.5 bg-linear-to-r from-emerald-600 via-sky-600 to-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-6">Tooling Snapshot</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Cloud", value: "AWS EC2 / S3", detail: "Compute + storage" },
                  { label: "CI/CD", value: "Actions + Jenkins", detail: "Automated pipelines" },
                  { label: "Containers", value: "Docker + K8s", detail: "Build and runtime" },
                  { label: "Servers", value: "Linux + Nginx", detail: "Reverse proxy" }
                ].map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                    <div className="text-sm font-medium text-foreground mb-1">{metric.label}</div>
                    <div className="text-xs text-muted-foreground">{metric.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tradeoffs & Learnings */}
          <div className="bg-secondary/50 border border-primary/20 rounded-xl p-6 sm:p-8 animate-fade-in animation-delay-900">
            <h3 className="text-2xl font-bold mb-6">Key Tradeoffs & Learnings</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-2">🔄 Tradeoff: Simplicity vs Automation</p>
                <p className="text-sm">
                  Early projects used manual deployments for speed. Moving to CI/CD improves reliability 
                  but adds initial setup complexity.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">📦 Tradeoff: Docker Compose vs Kubernetes</p>
                <p className="text-sm">
                  Compose is fast for small deployments, while Kubernetes adds resiliency and scaling at the cost 
                  of more operational overhead.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">💡 Learning: Infrastructure as Code</p>
                <p className="text-sm">
                  Writing infrastructure definitions up front helps avoid configuration drift and makes 
                  onboarding faster for new environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
