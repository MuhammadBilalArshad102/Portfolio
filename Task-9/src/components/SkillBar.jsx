import useReveal from "../hooks/useReveal";

export default function SkillBar({ name, level }) {
  const { ref, isVisible } = useReveal(0.4);

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-sm font-medium text-ink-800 dark:text-paper-100">{name}</span>
        <span className="font-mono text-xs text-ink-500 dark:text-paper-200/60">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-ink-900/8 dark:bg-paper-100/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal to-amber transition-[width] duration-[1200ms] ease-out"
          style={{ width: isVisible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}
