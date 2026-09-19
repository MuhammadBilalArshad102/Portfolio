import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "../data/portfolioData";
import useActiveSection from "../hooks/useActiveSection";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "./Icons";

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.id));
  const listRef = useRef(null);
  const linkRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const activeEl = linkRefs.current[activeId];
    const listEl = listRef.current;
    if (!activeEl || !listEl) return;

    const update = () => {
      const listRect = listEl.getBoundingClientRect();
      const linkRect = activeEl.getBoundingClientRect();
      setIndicator({
        left: linkRect.left - listRect.left,
        width: linkRect.width,
        opacity: 1,
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeId]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-paper-50/85 dark:bg-ink-950/85 border-b border-ink-900/10 dark:border-paper-100/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="font-mono text-sm font-bold tracking-tight flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-md bg-ink-900 dark:bg-amber text-paper-50 dark:text-ink-950 flex items-center justify-center text-xs group-hover:rotate-6 transition-transform duration-200">
            {profile.initials}
          </span>
          <span className="hidden sm:inline text-ink-900 dark:text-paper-50">
            {profile.name.split(" ")[0]}<span className="text-amber-dark dark:text-amber">.</span>
          </span>
        </a>

        <ul ref={listRef} className="hidden md:flex items-center gap-1 font-mono text-sm relative">
          <span
            aria-hidden="true"
            className="absolute -bottom-1 h-[2px] bg-gradient-to-r from-teal to-amber rounded-full transition-all duration-300 ease-out"
            style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
          />
          {navLinks.map((link, i) => (
            <li key={link.id}>
              <a
                ref={(el) => (linkRefs.current[link.id] = el)}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`px-3 py-2 rounded-md transition-colors duration-150 flex items-center gap-1.5 ${
                  activeId === link.id
                    ? "text-amber-dark dark:text-amber"
                    : "text-ink-500 dark:text-paper-200/70 hover:text-ink-900 dark:hover:text-paper-50"
                }`}
              >
                <span className="text-[10px] opacity-50">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-md border border-ink-900/15 dark:border-paper-100/15 flex items-center justify-center text-ink-700 dark:text-paper-100 hover:border-teal hover:text-teal-dark dark:hover:text-teal transition-colors duration-150"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden w-9 h-9 rounded-md border border-ink-900/15 dark:border-paper-100/15 flex items-center justify-center text-ink-700 dark:text-paper-100"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-5 pb-6 pt-1 flex flex-col gap-1 font-mono text-sm bg-paper-50/95 dark:bg-ink-950/95 border-b border-ink-900/10 dark:border-paper-100/10">
          {navLinks.map((link, i) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`block px-3 py-2.5 rounded-md ${
                  activeId === link.id
                    ? "text-amber-dark dark:text-amber bg-ink-900/5 dark:bg-paper-100/5"
                    : "text-ink-600 dark:text-paper-200/80"
                }`}
              >
                <span className="text-[10px] opacity-50 mr-2">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
