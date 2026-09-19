// Small, dependency-free SVG icon set.
// Kept as one file so every component can import exactly the icons it needs.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

export const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3M12 13v3" />
  </svg>
);

export const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 0 0 1.8-2.2 8 8 0 0 1-2.5 1 4 4 0 0 0-6.9 3.6A11.4 11.4 0 0 1 3.9 4.6a4 4 0 0 0 1.2 5.3 4 4 0 0 1-1.8-.5v.05a4 4 0 0 0 3.2 3.9 4 4 0 0 1-1.8.07 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 17.6a11.3 11.3 0 0 0 6.1 1.8c7.3 0 11.3-6.1 11.3-11.3v-.5A8 8 0 0 0 22 5.9Z" />
  </svg>
);

export const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);

export const MapPinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const SunIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
  </svg>
);

export const MoonIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const ArrowUpRightIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowDownIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
);

export const SendIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
    <path d="m22 2-11 11M22 2l-7 20-4-9-9-4Z" />
  </svg>
);

export const CheckCircleIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.5 2.3 2.3L16 10" />
  </svg>
);

export const BranchIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
    <circle cx="6" cy="6" r="2.2" />
    <circle cx="6" cy="18" r="2.2" />
    <circle cx="18" cy="9" r="2.2" />
    <path d="M6 8.2V15.8M6 9c0 3.5 3 4.5 6 4.5h3.5M18 11.2v-.1" />
  </svg>
);
