import { useRef, useState } from "react";
import { GithubIcon, ArrowUpRightIcon } from "./Icons";

export default function ProjectCard({ project }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -6, ry: px * 6 });
  };

  const resetTilt = () => setTilt({ rx: 0, ry: 0 });

  return (
    <article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(${
          tilt.rx || tilt.ry ? -4 : 0
        }px)`,
      }}
      className="card p-6 flex flex-col h-full group hover:border-teal/60 dark:hover:border-teal/50 transition-[transform,border-color,box-shadow] duration-150 ease-out will-change-transform hover:shadow-xl hover:shadow-ink-900/5 dark:hover:shadow-black/30"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[11px] tracking-wide text-amber-dark dark:text-amber">
          {project.tag}
        </span>
        {project.featured && (
          <span className="tag-pill !border-teal/40 !text-teal-dark dark:!text-teal">
            featured
          </span>
        )}
      </div>

      <h3 className="mt-3 font-mono text-lg font-bold text-ink-900 dark:text-paper-50 group-hover:text-amber-dark dark:group-hover:text-amber transition-colors">
        {project.name}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-paper-200/80 flex-1">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="tag-pill">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 pt-4 border-t border-ink-900/8 dark:border-paper-100/8">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 dark:text-paper-200/90 hover:text-teal-dark dark:hover:text-teal transition-colors"
        >
          <GithubIcon width={16} height={16} />
          Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 dark:text-paper-200/90 hover:text-amber-dark dark:hover:text-amber transition-colors"
        >
          Live Demo
          <ArrowUpRightIcon />
        </a>
      </div>
    </article>
  );
}
