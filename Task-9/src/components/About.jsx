import { about } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-ink-900/10 dark:border-paper-100/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-2">Get to know me</p>
          <h2 className="section-heading">{about.heading}</h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16">
          <Reveal delay={100}>
            <div className="space-y-5 text-ink-700 dark:text-paper-200/90 leading-relaxed text-[15px] sm:text-base">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="card p-6">
              <p className="font-mono text-xs text-ink-500 dark:text-paper-200/60 mb-4">
                profile.json
              </p>
              <dl className="space-y-4">
                {about.facts.map((fact) => (
                  <div key={fact.label} className="flex items-baseline justify-between gap-4 border-b border-ink-900/8 dark:border-paper-100/8 pb-3 last:border-none last:pb-0">
                    <dt className="font-mono text-xs text-ink-500 dark:text-paper-200/60">
                      {fact.label}
                    </dt>
                    <dd className="font-mono text-sm font-semibold text-right text-ink-900 dark:text-paper-50">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
