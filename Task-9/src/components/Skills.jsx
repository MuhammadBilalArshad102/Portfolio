import { skills } from "../data/portfolioData";
import Reveal from "./Reveal";
import SkillBar from "./SkillBar";
import { BranchIcon } from "./Icons";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-paper-100/60 dark:bg-ink-900/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-2">Toolbox</p>
          <h2 className="section-heading">{skills.heading}</h2>
          <p className="mt-2 font-mono text-sm text-ink-500 dark:text-paper-200/60">
            {skills.subheading}
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {skills.groups.map((group, gi) => (
            <Reveal key={group.name} delay={gi * 120}>
              <div className="card p-6 h-full">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-ink-900/8 dark:border-paper-100/8">
                  <BranchIcon className="text-amber-dark dark:text-amber shrink-0" />
                  <span className="font-mono text-sm font-semibold text-ink-900 dark:text-paper-50">
                    {group.name}
                  </span>
                </div>
                <div className="space-y-5">
                  {group.items.map((item) => (
                    <SkillBar key={item.name} name={item.name} level={item.level} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
