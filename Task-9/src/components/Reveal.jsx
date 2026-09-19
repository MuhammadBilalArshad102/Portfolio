import useReveal from "../hooks/useReveal";

export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const { ref, isVisible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
