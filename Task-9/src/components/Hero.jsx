import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolioData";
import { ArrowDownIcon, ArrowUpRightIcon, MailIcon } from "./Icons";

function useTypewriter(words, typingSpeed = 65, deletingSpeed = 35, pause = 1400) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];

    if (!deleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return words[index % words.length].substring(0, subIndex);
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 20 });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSectionMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleCardMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -10, ry: px * 12 });
  };

  const resetTilt = () => setTilt({ rx: 0, ry: 0 });

  return (
    <section
      id="home"
      onMouseMove={handleSectionMouseMove}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* background grid + glow signature */}
      <div className="absolute inset-0 -z-10 bg-grid-light dark:bg-grid-dark bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div
        className="hidden sm:block absolute w-[26rem] h-[26rem] bg-amber/20 dark:bg-amber/10 rounded-full blur-[110px] -z-10 transition-[left,top] duration-500 ease-out pointer-events-none"
        style={{ left: `${glow.x}%`, top: `${glow.y}%`, transform: "translate(-50%, -50%)" }}
      />
      <div className="absolute -top-24 right-0 w-[22rem] h-[22rem] bg-amber/10 dark:bg-amber/5 rounded-full blur-[110px] -z-10 animate-drift" />
      <div className="absolute top-40 -left-24 w-72 h-72 bg-teal/20 dark:bg-teal/10 rounded-full blur-[100px] -z-10 animate-drift [animation-delay:-4s]" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-ink-500 dark:text-paper-200/70 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            Available for opportunities
          </div>

          <p className="eyebrow mb-3">Hi, my name is</p>
          <h1 className="font-mono font-extrabold tracking-tight text-4xl sm:text-6xl leading-[1.05] text-ink-900 dark:text-paper-50">
            {profile.name}.
          </h1>

          <h2 className="mt-3 font-mono text-2xl sm:text-3xl font-semibold text-ink-500 dark:text-paper-200/80 h-10">
            <span className="text-amber-dark dark:text-amber">&gt;</span> {typed}
            <span className="inline-block w-[2px] h-6 -mb-1 ml-1 bg-teal animate-blink align-middle" />
          </h2>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-ink-700 dark:text-paper-200/90 leading-relaxed">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button onClick={() => scrollTo("projects")} className="btn-primary">
              View Projects
              <ArrowUpRightIcon />
            </button>
            <button onClick={() => scrollTo("contact")} className="btn-secondary">
              Contact Me
              <MailIcon width={16} height={16} />
            </button>
          </div>
        </div>


                    <div
              className="spin-slow absolute -inset-2 rounded-full opacity-70"
              style={{
                background: "conic-gradient(from 0deg, #b5563a, #7a9188, transparent 40%, transparent 60%, #b5563a)",
                WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
              }}
            />

        {/* Avatar signature element — no card frame, just the photo/initials */}
        <div className="justify-self-center md:justify-self-end w-full max-w-xs [perspective:1200px]">
          <div
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetTilt}
            className="relative aspect-square rounded-full animate-float transition-transform duration-150 ease-out will-change-transform flex items-center justify-center"
            style={{
              transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber/30 via-teal/20 to-transparent blur-xl -z-10" />
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full rounded-full object-cover ring-4 ring-white/10 dark:ring-white/10 shadow-2xl shadow-ink-900/20 dark:shadow-black/50"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-ink-800 to-ink-950 flex items-center justify-center ring-4 ring-white/10 shadow-2xl shadow-ink-900/20 dark:shadow-black/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-dark bg-grid opacity-40" />
                               <span className="relative font-mono text-6xl font-bold text-paper-100/90 [text-shadow:0_0_30px_rgba(181,86,58,0.35)]">
                  {profile.initials}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-ink-500 dark:text-paper-200/60 hover:text-amber-dark dark:hover:text-amber transition-colors"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">scroll</span>
        <ArrowDownIcon className="animate-bounce" />
      </button>
    </section>
  );
}