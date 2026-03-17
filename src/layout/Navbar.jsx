import { Button } from "@/components/Button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#deep-dive", label: "DevOps & Cloud" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setIsHidden(
        !isMobileMenuOpen && currentScrollY > lastScrollY && currentScrollY > 120
      );
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 border transition-all duration-500 ${
        isScrolled
          ? "glass-strong py-3 border-primary/30"
          : "bg-transparent py-5 border-transparent"
      } ${isHidden ? "-translate-y-full" : "translate-y-0"} z-50`}
      style={{ backgroundClip: "padding-box" }}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          NC<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="px-4 py-2 text-sm rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="glass rounded-full p-2 hover:bg-surface transition-colors"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="glass rounded-full p-2 hover:bg-surface transition-colors"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>
          <button
            className="p-2 text-foreground cursor-pointer"
            onClick={() => {
              setIsMobileMenuOpen((prev) => !prev);
              setIsHidden(false);
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-primary py-2"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
