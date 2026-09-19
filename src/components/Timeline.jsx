import { timeline } from "../data/portfolioData";
import Reveal from "./Reveal";

const typeMeta = {
  job: { label: "feat", color: "text-teal-dark dark:text-teal", dot: "bg-teal" },
  edu: { label: "base", color: "text-ink-500 dark:text-paper-200/70", dot: "bg-ink-500 dark:bg-paper-200/50" },
  cert: { label: "learn", color: "text-amber-dark dark:text-amber", dot: "bg-amber" },
  achievement: { label: "merge", color: "text-teal-dark dark:text-teal", dot: "bg-teal-dark dark:bg-teal-light" },
};

export default function Timeline() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-paper-100/60 dark:bg-ink-900/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-2">The log</p>
          <h2 className="section-heading">{timeline.heading}</h2>
          <p className="mt-2 font-mono text-sm text-ink-500 dark:text-paper-200/60">
            {timeline.subheading}
          </p>
        </Reveal>

        <div className="mt-12 relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-900/12 dark:bg-paper-100/12" />

          <div className="space-y-10">
            {timeline.entries.map((entry, i) => {
              const meta = typeMeta[entry.type] ?? typeMeta.edu;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="relative pl-9">
                    <span
                      className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full ring-4 ring-paper-100 dark:ring-ink-900 ${meta.dot}`}
                    />
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                      <span className={`font-mono text-xs font-bold ${meta.color}`}>
                        {meta.label}:
                      </span>
                      <h3 className="font-mono text-base font-semibold text-ink-900 dark:text-paper-50">
                        {entry.title}
                      </h3>
                      <span className="font-mono text-[11px] text-ink-400 dark:text-paper-200/40">
                        {entry.date}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-ink-600 dark:text-paper-200/70 mb-1.5">
                      {entry.org}
                    </p>
                    <p className="text-sm leading-relaxed text-ink-600 dark:text-paper-200/80 max-w-xl">
                      {entry.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
