import { useMemo, useState } from "react";
import { projects } from "../data/portfolioData";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

const FILTERS = ["All", "Featured"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (filter === "Featured") return projects.items.filter((p) => p.featured);
    return projects.items;
  }, [filter]);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-2">Selected work</p>
              <h2 className="section-heading">{projects.heading}</h2>
              <p className="mt-2 font-mono text-sm text-ink-500 dark:text-paper-200/60">
                {projects.subheading}
              </p>
            </div>

            <div className="flex gap-1 p-1 rounded-md border border-ink-900/10 dark:border-paper-100/10 font-mono text-xs">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3.5 py-1.5 rounded transition-colors duration-150 ${
                    filter === f
                      ? "bg-ink-900 text-paper-50 dark:bg-amber dark:text-ink-950"
                      : "text-ink-500 dark:text-paper-200/70 hover:text-ink-900 dark:hover:text-paper-50"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="mt-10 text-center font-mono text-sm text-ink-500 dark:text-paper-200/60">
            No projects match this filter yet.
          </p>
        )}
      </div>
    </section>
  );
}
