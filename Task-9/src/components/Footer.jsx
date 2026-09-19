import { profile } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-900/10 dark:border-paper-100/10 py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-ink-500 dark:text-paper-200/50">
          © {year} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <p className="font-mono text-xs text-ink-400 dark:text-paper-200/30">
          v1.0.0 · deployed on Vercel/Netlify
        </p>
      </div>
    </footer>
  );
}
